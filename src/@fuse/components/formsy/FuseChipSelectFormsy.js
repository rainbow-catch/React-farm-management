import React from 'react';
import {FormControl, FormHelperText, InputLabel} from '@material-ui/core';
import {FuseChipSelect} from '@fuse';
import {withFormsy} from 'formsy-react';
import _ from '@lodash';
import clsx from 'clsx';

function FuseChipSelectFormsy(props)
{
    const importedProps = _.pick(props, [
        'children',
        'classes',
        'className',
        'defaultValue',
        'disabled',
        'fullWidth',
        'id',
        'label',
        'name',
        'onBlur',
        'onChange',
        'onFocus',
        'placeholder',
        'required',
        'textFieldProps',
        'variant',
        'isMulti',
        'options',
        'errorMessage'
    ]);

    // An error message is returned only if the component is invalid
    const errorMessage = props.getErrorMessage();
    const value = props.getValue();

    function changeValue(value, selectedOptions)
    {
        if ( props.multiple )
        {
            props.setValue(selectedOptions.map(option => option.value));
        }
        else
        {
            props.setValue(value);
        }
    }

    return (
        <FormControl
            error={Boolean(errorMessage)}
            className={clsx(props.className, props.showRequired() ? 'required' : props.showError() ? 'error' : null)}
            variant={importedProps.variant}>
            {props.label && (
                <InputLabel htmlFor={props.name}>{props.label}</InputLabel>
            )}
            <FuseChipSelect
                {...importedProps}
                value={value}
                onChange={changeValue}
            />
            {Boolean(errorMessage) && (
                <FormHelperText>{errorMessage}</FormHelperText>
            )}
        </FormControl>
    );
}

export default React.memo(withFormsy(FuseChipSelectFormsy));
