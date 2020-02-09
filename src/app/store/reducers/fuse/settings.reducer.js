import {createMuiTheme} from '@material-ui/core';
import * as Actions from 'app/store/actions/fuse';
import FuseLayoutConfigs from 'app/fuse-layouts/FuseLayoutConfigs';
import FuseSettingsConfig from 'app/fuse-configs/settingsConfig';
import FuseThemesConfig from 'app/fuse-configs/themesConfig';
import _ from '@lodash';
import {
    defaultSettings,
    getParsedQuerySettings,
    defaultThemes,
    defaultThemeOptions,
    mustHaveThemeOptions,
    extendThemeWithMixins,
    mainThemeVariations
} from '@fuse/FuseDefaultSettings';

const initialSettings = getInitialSettings();
const initialThemes = getInitialThemes();

const initialState = {
    initial : initialSettings,
    defaults: _.merge({}, initialSettings),
    current : _.merge({}, initialSettings),
    themes  : initialThemes,
    ...getThemeOptions(initialThemes, initialSettings)
};

const settings = function (state = initialState, action) {
    switch ( action.type )
    {
        case Actions.SET_SETTINGS:
        {
            const current = generateSettings(state.defaults, action.value);
            const themes = current.theme.main !== state.current.theme.main ? {...state.themes, ...updateMainThemeVariations(current.theme.main)} : state.themes;
            return {
                ...state,
                current,
                themes,
                ...getThemeOptions(themes, current)
            };
        }
        case Actions.SET_INITIAL_SETTINGS:
        {
            return _.merge({}, initialState);
        }
        case Actions.SET_DEFAULT_SETTINGS:
        {
            const defaults = generateSettings(state.defaults, action.value);
            const themes = defaults.theme.main !== state.defaults.theme.main ? {...state.themes, ...updateMainThemeVariations(defaults.theme.main)} : state.themes;
            return {
                ...state,
                defaults: _.merge({}, defaults),
                current : _.merge({}, defaults),
                themes,
                ...getThemeOptions(themes, defaults)
            };
        }
        case Actions.RESET_DEFAULT_SETTINGS:
        {
            const themes = {...state.themes, ...updateMainThemeVariations(state.defaults.theme.main)};
            return {
                ...state,
                defaults: _.merge({}, state.defaults),
                current : _.merge({}, state.defaults),
                themes,
                ...getThemeOptions(themes, state.defaults)
            };
        }
        default:
        {
            return state;
        }
    }
};

export default settings;

/**
 * SETTINGS
 */
function getInitialSettings()
{
    const defaultLayoutStyle = (FuseSettingsConfig.layout && FuseSettingsConfig.layout.style) ? FuseSettingsConfig.layout.style : "layout1";
    const layout = {
        style : defaultLayoutStyle,
        config: FuseLayoutConfigs[defaultLayoutStyle].defaults
    };
    return _.merge({}, defaultSettings, {layout}, FuseSettingsConfig, getParsedQuerySettings());
}

/**
 * THEMES
 */
function getInitialThemes()
{
    const themesObj = Object.keys(FuseThemesConfig).length !== 0 ? FuseThemesConfig : defaultThemes;

    const themes = Object.assign({}, ...Object.entries(themesObj).map(([key, value]) => {
            const muiTheme = _.merge({}, defaultThemeOptions, value, mustHaveThemeOptions);
            return {
                [key]: createMuiTheme(_.merge({}, muiTheme, {mixins: extendThemeWithMixins(muiTheme)}))
            }
        }
    ));

    return {
        ...themes,
        ...mainThemeVariations(themesObj[initialSettings.theme.main])
    }
}

function updateMainThemeVariations(mainTheme)
{
    const themesObj = Object.keys(FuseThemesConfig).length !== 0 ? FuseThemesConfig : defaultThemes;
    return mainThemeVariations(themesObj[mainTheme])
}

function getThemeOptions(themes, settings)
{
    return {
        mainTheme   : themes[settings.theme.main],
        navbarTheme : themes[settings.theme.navbar],
        toolbarTheme: themes[settings.theme.toolbar],
        footerTheme : themes[settings.theme.footer],
        ...updateMainThemeVariations(settings.theme.main)
    }
}

export function generateSettings(defaultSettings, newSettings)
{
    return _.merge({}, defaultSettings, newSettings && newSettings.layout && newSettings.layout.style ? {layout: {config: FuseLayoutConfigs[newSettings.layout.style].defaults}} : {}, newSettings);
}
