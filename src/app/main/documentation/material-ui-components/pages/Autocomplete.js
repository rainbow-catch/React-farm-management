import React from 'react';
import {FuseExample, FuseHighlight, FusePageSimple} from '@fuse';
import {Button, Icon, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */
const useStyles = makeStyles(theme => ({
    layoutRoot: {
        '& .description': {
            marginBottom: 16
        }
    }
}));

function AutocompleteDoc(props)
{
    const classes = useStyles();
    return (

        <FusePageSimple
            classes={{
                root: classes.layoutRoot
            }}
            header={
                <div className="flex flex-1 items-center justify-between p-24">
                    <div className="flex flex-col">
                        <div className="flex items-center mb-16">
                            <Icon className="text-18" color="action">home</Icon>
                            <Icon className="text-16" color="action">chevron_right</Icon>
                            <Typography color="textSecondary">Documentation</Typography>
                            <Icon className="text-16" color="action">chevron_right</Icon>
                            <Typography color="textSecondary">Material UI Components</Typography>
                        </div>
                        <Typography variant="h6">Autocomplete</Typography>
                    </div>
                    <Button
                        className="normal-case"
                        variant="contained"
                        component="a"
                        href="https://material-ui.com/components/autocomplete"
                        target="_blank"
                        role="button"
                    >
                        <Icon className="mr-4">link</Icon>
                        Reference
                    </Button>
                </div>
            }
            content={
                <div className="p-24 max-w-2xl">
                    <Typography className="text-44 mt-32 mb-8" component="h1">Autocomplete</Typography>
                    <Typography className="description">The autocomplete is a normal text input enhanced by a panel of suggested options.</Typography>

                    <Typography className="mb-16" component="div">The widget is useful for setting the value of a single-line textbox in one of two types of scenarios:</Typography>
                    <ol>
                        <li>The value for the textbox must be chosen from a predefined set of allowed values, e.g., a location field must contain a valid location name: <a href="#combo-box">combo box</a>.</li>
                        <li>The textbox may contain any arbitrary value, but it is advantageous to suggest possible values to the user, e.g., a search field may suggest similar or previous searches to save the user time: <a href="#free-solo">free solo</a>.</li>
                    </ol>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Combo box</Typography>
                    <Typography className="mb-16" component="div">The value must be chosen from a predefined set of allowed values.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/documentation/material-ui-components/components/autocomplete/ComboBox.js').default}
                        raw={require('!raw-loader!app/main/documentation/material-ui-components/components/autocomplete/ComboBox.js')}
                    /></Typography>
                    <Typography className="text-24 mt-32 mb-8" component="h3">Playground</Typography>
                    <Typography className="mb-16" component="div">Each of the following examples demonstrate one feature of the Autocomplete component.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/documentation/material-ui-components/components/autocomplete/Playground.js').default}
                        raw={require('!raw-loader!app/main/documentation/material-ui-components/components/autocomplete/Playground.js')}
                    /></Typography>
                    <Typography className="text-24 mt-32 mb-8" component="h3">Country select</Typography>
                    <Typography className="mb-16" component="div">Choose one country between 248.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/documentation/material-ui-components/components/autocomplete/CountrySelect.js').default}
                        raw={require('!raw-loader!app/main/documentation/material-ui-components/components/autocomplete/CountrySelect.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Free solo</Typography>
                    <Typography className="mb-16" component="div">Set <code>{`freeSolo`}</code> to true so the textbox can contain any arbitrary value.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/documentation/material-ui-components/components/autocomplete/FreeSolo.js').default}
                        raw={require('!raw-loader!app/main/documentation/material-ui-components/components/autocomplete/FreeSolo.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Grouped</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/documentation/material-ui-components/components/autocomplete/Grouped.js').default}
                        raw={require('!raw-loader!app/main/documentation/material-ui-components/components/autocomplete/Grouped.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Disabled options</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/documentation/material-ui-components/components/autocomplete/DisabledOptions.js').default}
                        raw={require('!raw-loader!app/main/documentation/material-ui-components/components/autocomplete/DisabledOptions.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2"><code>{`useAutocomplete`}</code></Typography>
                    <Typography className="mb-16" component="div">For advanced customization use cases, we expose a <code>{`useAutocomplete()`}</code> hook.
                        It accepts almost the same options as the Autocomplete component minor all the props
                        related to the rendering of JSX.
                        The Autocomplete component uses this hook internally.</Typography>

                    <FuseHighlight component="pre" className="language-jsx">
                        {` 
import useAutocomplete from '@material-ui/lab/useAutocomplete';
`}
                    </FuseHighlight>
                    <ul>
                        <li>📦 <a href="/size-snapshot">4.5 kB gzipped</a>.</li>
                    </ul>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/documentation/material-ui-components/components/autocomplete/UseAutocomplete.js').default}
                        raw={require('!raw-loader!app/main/documentation/material-ui-components/components/autocomplete/UseAutocomplete.js')}
                    /></Typography>
                    <Typography className="text-24 mt-32 mb-8" component="h3">Customized hook</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/documentation/material-ui-components/components/autocomplete/CustomizedHook.js').default}
                        raw={require('!raw-loader!app/main/documentation/material-ui-components/components/autocomplete/CustomizedHook.js')}
                    /></Typography>
                    <Typography className="mb-16" component="div">Head to the <a href="#customized-autocomplete">Customized Autocomplete</a> section for a customization example with the <code>{`Autocomplete`}</code> component instead of the hook.</Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Asynchronous requests</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/documentation/material-ui-components/components/autocomplete/Asynchronous.js').default}
                        raw={require('!raw-loader!app/main/documentation/material-ui-components/components/autocomplete/Asynchronous.js')}
                    /></Typography>
                    <Typography className="text-24 mt-32 mb-8" component="h3">Google Maps place</Typography>
                    <Typography className="mb-16" component="div">A customized UI for Google Maps Places Autocomplete.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/documentation/material-ui-components/components/autocomplete/GoogleMaps.js').default}
                        raw={require('!raw-loader!app/main/documentation/material-ui-components/components/autocomplete/GoogleMaps.js')}
                    /></Typography>
                    <Typography className="mb-16" component="div">For this demo, we need to load the <a href="https://developers.google.com/maps/documentation/javascript/tutorial">Google Maps JavaScript</a> API.</Typography>
                    <blockquote>
                        <Typography className="mb-16" component="div">⚠️ Before you can start using the Google Maps JavaScript API, you must sign up and create a billing account.</Typography>
                    </blockquote>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Multiple values</Typography>
                    <Typography className="mb-16" component="div">Also knowned as tags, the user is allowed to enter more than 1 value.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/documentation/material-ui-components/components/autocomplete/Tags.js').default}
                        raw={require('!raw-loader!app/main/documentation/material-ui-components/components/autocomplete/Tags.js')}
                    /></Typography>
                    <Typography className="text-24 mt-32 mb-8" component="h3">Fixed options</Typography>
                    <Typography className="mb-16" component="div">In the event that you need to lock certain tag so that they can&#39;t be removed in the interface, you can set the chips disabled.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/documentation/material-ui-components/components/autocomplete/FixedTags.js').default}
                        raw={require('!raw-loader!app/main/documentation/material-ui-components/components/autocomplete/FixedTags.js')}
                    /></Typography>
                    <Typography className="text-24 mt-32 mb-8" component="h3">Checkboxes</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/documentation/material-ui-components/components/autocomplete/CheckboxesTags.js').default}
                        raw={require('!raw-loader!app/main/documentation/material-ui-components/components/autocomplete/CheckboxesTags.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Customized Autocomplete</Typography>
                    <Typography className="mb-16" component="div">This demo reproduces the GitHub&#39;s label picker:</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/documentation/material-ui-components/components/autocomplete/GitHubLabel.js').default}
                        raw={require('!raw-loader!app/main/documentation/material-ui-components/components/autocomplete/GitHubLabel.js')}
                    /></Typography>
                    <Typography className="mb-16" component="div">Head to the <a href="#customized-hook">Customized hook</a> section for a customization example with the <code>{`useAutocomplete`}</code> hook instead of the component.</Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Highlights</Typography>
                    <Typography className="mb-16" component="div">The following demo relies on <a href="https://github.com/moroshko/autosuggest-highlight">autosuggest-highlight</a>, a small (1 kB) utility for highlighting text in autosuggest and autocomplete components.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/documentation/material-ui-components/components/autocomplete/Highlights.js').default}
                        raw={require('!raw-loader!app/main/documentation/material-ui-components/components/autocomplete/Highlights.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Custom filter</Typography>
                    <Typography className="mb-16" component="div">The component exposes a factory to create a filter method that can provided to the <code>{`filerOption`}</code> prop.
                        You can use it to change the default option filter behavior.</Typography>

                    <FuseHighlight component="pre" className="language-js">
                        {` 
import { createFilterOptions } from '@material-ui/lab/Autocomplete';
`}
                    </FuseHighlight>
                    <Typography className="mb-16" component="div">It supports the following options:</Typography>
                    <ol>
                        <li><code>{`config`}</code> (<em>Object</em> [optional]):
                            <ul>
                                <li><code>{`config.ignoreAccents`}</code> (<em>Boolean</em> [optional]): Defaults to <code>{`true`}</code>. Remove diacritics.</li>
                                <li><code>{`config.ignoreCase`}</code> (<em>Boolean</em> [optional]): Defaults to <code>{`true`}</code>. Lowercase everything.</li>
                                <li><code>{`config.matchFrom`}</code> (<em>&#39;any&#39; | &#39;start&#39;</em> [optional]): Defaults to <code>{`'any'`}</code>.</li>
                                <li><code>{`config.stringify`}</code> (<em>Func</em> [optional]): Defaults to <code>{`JSON.stringify`}</code>.</li>
                                <li><code>{`config.trim`}</code> (<em>Boolean</em> [optional]): Defaults to <code>{`false`}</code>. Remove trailing spaces.</li>
                            </ul>
                        </li>
                    </ol>
                    <Typography className="mb-16" component="div">In the following demo, the options need to start with the query prefix:</Typography>

                    <FuseHighlight component="pre" className="language-js">
                        {` 
const filterOptions = createFilterOptions({
  matchFrom: 'start',
  stringify: option => option.title,
});

<Autocomplete filterOptions={filterOptions} />
`}
                    </FuseHighlight>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/documentation/material-ui-components/components/autocomplete/Filter.js').default}
                        raw={require('!raw-loader!app/main/documentation/material-ui-components/components/autocomplete/Filter.js')}
                    /></Typography>
                    <Typography className="text-24 mt-32 mb-8" component="h3">Advanced</Typography>
                    <Typography className="mb-16" component="div">For richer filtering mechanisms, like fuzzy matching, it&#39;s recommended to look at <a href="https://github.com/kentcdodds/match-sorter">match-sorter</a>. For instance:</Typography>

                    <FuseHighlight component="pre" className="language-jsx">
                        {` 
import matchSorter from 'match-sorter';

const filterOptions = (options, { inputValue }) =>
  matchSorter(options, inputValue);

<Autocomplete filterOptions={filterOptions} />
`}
                    </FuseHighlight>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Virtualization</Typography>
                    <Typography className="mb-16" component="div">Search within 10,000 randomly generated options. The list is virtualized thanks to <a href="https://github.com/bvaughn/react-window">react-window</a>.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/documentation/material-ui-components/components/autocomplete/Virtualize.js').default}
                        raw={require('!raw-loader!app/main/documentation/material-ui-components/components/autocomplete/Virtualize.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Limitations</Typography>
                    <Typography className="text-24 mt-32 mb-8" component="h3">iOS VoiceOver</Typography>
                    <Typography className="mb-16" component="div">VoiceOver on iOS Safari doesn&#39;t support the <code>{`aria-owns`}</code> attribute very well.
                        You can work around the issue with the <code>{`disablePortal`}</code> prop.</Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Accessibility</Typography>
                    <Typography className="mb-16" component="div">(WAI-ARIA: <a href="https://www.w3.org/TR/wai-aria-practices/#combobox">https://www.w3.org/TR/wai-aria-practices/#combobox</a>)</Typography>
                    <Typography className="mb-16" component="div">We encourage the usage of a label for the textbox.
                        The component implements the WAI-ARIA authoring practices.</Typography>

                </div>
            }
        />

    );
}

export default AutocompleteDoc;
