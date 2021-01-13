import React, {useState} from 'react';
import {Icon, IconButton, InputAdornment, MenuItem, TextField} from '@material-ui/core';
import ToolbarMenu from './ToolbarMenu';
import moment from 'moment';

function BirthMenu(props)
{
    const [anchorEl, setAnchorEl] = useState(null);
    const birthDate = props.birth ? moment(props.birth).format(moment.HTML5_FMT.DATE) : "";

    function handleMenuOpen(event)
    {
        setAnchorEl(event.currentTarget);
    }

    function handleMenuClose()
    {
        setAnchorEl(null);
    }

    return (
        <div>
            <IconButton color="inherit" onClick={handleMenuOpen}>
                <Icon>card_giftcard</Icon>
            </IconButton>
            <ToolbarMenu state={anchorEl} onClose={handleMenuClose}>
                {props.birth ? (
                    <MenuItem
                        onClick={(ev) => {
                            props.onRemoveBirth();
                            handleMenuClose(ev);
                        }}
                    >
                        Remove Data de nascimento
                    </MenuItem>
                ) : (
                    <div className="p-16">
                        <TextField
                            label="Data de nascimento"
                            type="date"
                            name="nascimento"
                            value={birthDate}
                            onChange={(ev) => {
                                props.onBirthChange(ev);
                                handleMenuClose(ev)
                            }}
                            placeholder=" Choose a Data de nascimento"
                            className=""
                            InputLabelProps={{
                                shrink: true
                            }}
                            variant="outlined"
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <Icon color="action">today</Icon>
                                    </InputAdornment>
                                )
                            }}
                        />
                    </div>
                )}
            </ToolbarMenu>
        </div>
    );
}

export default BirthMenu;
