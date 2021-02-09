import React, { Fragment, useState } from 'react';
import { Tooltip, Button, Icon, Input, Typography, IconButton, Fab } from '@material-ui/core';
import { FuseScrollbars } from '@fuse';
import { useForm, useUpdateEffect } from '@fuse/hooks';
import moment from 'moment';
import _ from '@lodash';
import { withRouter } from 'react-router-dom';
import NoteReminderLabel from 'app/main/apps/notes/NoteReminderLabel';
import NoteLabel from 'app/main/apps/notes/NoteLabel';
import NoteModel from 'app/main/apps/notes/model/NoteModel';
import NoteFormList from './checklist/NoteFormList';
import NoteFormReminder from './NoteFormReminder';
import NoteFormUploadImage from './NoteFormUploadImage';
import NoteFormLabelMenu from './NoteFormLabelMenu';
import NoteFormFarm from './NoteFormFarm';
import GoogleMap from 'google-map-react';
// import { DrawingManager } from "react-google-maps/lib/components/drawing/DrawingManager";

function NoteForm(props) {
    const [showList, setShowList] = useState(false);
    const [showFarmInput, setShowFarmInput] = useState(false);
    const { form: noteForm, handleChange, setForm } = useForm(
        _.merge(
            {},
            new NoteModel(),
            props.note,
            props.match.params.labelId ? { labels: [props.match.params.labelId] } : null,
            props.match.params.id === "archive" ? { archive: true } : null
        ));
    const { onChange } = props;

    useUpdateEffect(() => {
        if (noteForm && onChange) {
            onChange(noteForm);
        }
    }, [noteForm, onChange]);

    function handleOnCreate(event) {
        if (!props.onCreate) {
            return;
        }
        props.onCreate(noteForm);
    }

    function handleToggleList() {
        setShowList(!showList);
    }

    function handleToggleFarmInput() {
        setShowFarmInput(!showFarmInput);
    }

    function handleDateChange(date) {
        setForm(_.setIn(noteForm, "reminder", date));
    }

    function handleChecklistChange(checklist) {
        setForm(_.setIn(noteForm, `checklist`, checklist));
    }

    function handleFarmDataChange(farmData) {
        setForm(_.setIn(noteForm, `farmData`, farmData));
        handleToggleFarmInput();
    }

    function handleRemoveLabel(id) {
        setForm(_.setIn(noteForm, `labels`, noteForm.labels.filter(_id => _id !== id)));
    }

    function handleLabelsChange(labels) {
        setForm(_.setIn(noteForm, `labels`, labels));
    }

    function handleRemoveImage() {
        setForm(_.setIn(noteForm, `image`, ""));
    }

    function handleArchiveToggle() {
        setForm(_.setIn(noteForm, `archive`, !noteForm.archive));
        if (props.variant === "new") {
            setTimeout(() => handleOnCreate());
        }
    }

    function handleUploadChange(e) {
        const file = e.target.files[0];
        if (!file) {
            return;
        }
        const reader = new FileReader();

        reader.readAsBinaryString(file);

        reader.onload = () => {
            setForm(_.setIn(noteForm, `image`, `data:${file.type};base64,${btoa(reader.result)}`));
        };

        reader.onerror = function () {
            console.log("error on load image");
        };
    }

    function newFormButtonDisabled() {
        return noteForm.title === "" && noteForm.image === "" && noteForm.description === "" && noteForm.checklist.length === 0;
    }

    if (!noteForm) {
        return null;
    }
    const google=window.google
    console.log(google)

    const getPaths = (polygon) => {

        var polygonBounds = polygon.getPath();
        var bounds = [];
        for (var i = 0; i < polygonBounds.length; i++) {
          var point = {
            lat: polygonBounds.getAt(i).lat(),
            lng: polygonBounds.getAt(i).lng()
          };
          bounds.push(point);
        }
        console.log(bounds);
      }
    const handleGoogleMapApi = (google) => {
        const map = google.map
        const drawingManager = new google.maps.drawing.DrawingManager({
          drawingMode: google.maps.drawing.OverlayType.MARKER,
          drawingControl: true,
          drawingControlOptions: {
            position: google.maps.ControlPosition.TOP_CENTER,
            drawingModes: [
              google.maps.drawing.OverlayType.MARKER,
              google.maps.drawing.OverlayType.CIRCLE,
              google.maps.drawing.OverlayType.POLYGON,
              google.maps.drawing.OverlayType.POLYLINE,
              google.maps.drawing.OverlayType.RECTANGLE
            ]
          },
        //   markerOptions: {icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'},
          polygonOptions: {
            fillColor: '#ffff00',
            fillOpacity: 0.3,
            strokeWeight: 5,
            clickable: false,
            editable: true,
            zIndex: 1
          },
          onPolygonComplete: value => console.log(getPaths(value))
        });
        drawingManager.setMap(map);
      }
    return (
        <div className="flex flex-col w-full">
            <FuseScrollbars className="flex flex-auto w-full max-h-640">
                <div className="w-full">
                    {noteForm.image && noteForm.image !== "" && (
                        <div className="relative">
                            <img src={noteForm.image} className="w-full block" alt="note" />
                            <Fab
                                className="absolute right-0 bottom-0 m-8"
                                variant="extended"
                                size="small"
                                color="secondary"
                                aria-label="Delete Image"
                                onClick={handleRemoveImage}
                            >
                                <Icon fontSize="small">delete</Icon>
                            </Fab>
                        </div>
                    )}
                    <div className="p-16 pb-12">
                        <Input
                            className="font-bold"
                            placeholder="Title"
                            type="text"
                            name="title"
                            value={noteForm.title}
                            onChange={handleChange}
                            disableUnderline
                            fullWidth
                        />
                    </div>
                    <div className="p-16 pb-12">
                        <Input
                            placeholder="Cuentanos..."
                            multiline
                            rows="4"
                            name="description"
                            value={noteForm.description}
                            onChange={handleChange}
                            disableUnderline
                            fullWidth
                            autoFocus
                        />
                    </div>

                    {(noteForm.checklist.length > 0 || showList) && (
                        <div className="px-16">
                            <NoteFormList checklist={noteForm.checklist} onCheckListChange={handleChecklistChange} />
                        </div>
                    )}

                    {noteForm.farmData && !showFarmInput && (
                        <div className="px-16">
                            {Object.entries(noteForm.farmData).map(([key, value]) => (
                                <div>{key} : {value.toString()}</div>
                            ))}
                        </div>
                    )}
                    {showFarmInput && (
                        <div className="px-16">
                            <NoteFormFarm className="bg-gray-200 p-3 border border-gray-900 rounded" farmData={noteForm.farmData} onFarmDataChange={handleFarmDataChange} toggleInput={handleToggleFarmInput} />
                        </div>
                    )}
                    <div className="w-full h-320 pt-10">
                        <GoogleMap
                            bootstrapURLKeys={{
                                key: process.env.REACT_APP_MAP_KEY
                            }}
                            defaultZoom={5}
                            defaultCenter={[24.886, -70.268]}
                            options={{ scrollwheel: false, scaleControl: true }}
                            onGoogleApiLoaded={handleGoogleMapApi}
                        >
                            
                        </GoogleMap>
                    </div>
                    {(noteForm.labels || noteForm.reminder || noteForm.time) && (
                        <div className="flex flex-wrap w-full p-16 pb-12">
                            {noteForm.reminder && (
                                <NoteReminderLabel className="mt-4 mr-4" date={noteForm.reminder} />
                            )}
                            {noteForm.labels && noteForm.labels.map(id => (
                                <NoteLabel id={id} key={id} className="mt-4 mr-4" onDelete={() => handleRemoveLabel(id)} />
                            ))}
                            {noteForm.time && (
                                <Typography color="textSecondary" className="text-12 ml-auto mt-8 mr-4">
                                    Edited: {moment(noteForm.time).format('MMM DD YY, h:mm A')}
                                </Typography>
                            )}
                        </div>
                    )}
                </div>
            </FuseScrollbars>

            <div className="flex flex-auto justify-between items-center h-48">
                <div className="flex items-center px-4">

                    <Tooltip title="Remind me" placement="bottom">
                        <div>
                            <NoteFormReminder reminder={noteForm.reminder} onChange={handleDateChange} />
                        </div>
                    </Tooltip>

                    <Tooltip title="Add image" placement="bottom">
                        <div>
                            <NoteFormUploadImage onChange={handleUploadChange} />
                        </div>
                    </Tooltip>

                    <Tooltip title="Add checklist" placement="bottom">
                        <IconButton className="w-32 h-32 mx-4 p-0" onClick={handleToggleList}>
                            <Icon fontSize="small">playlist_add_check</Icon>
                        </IconButton>
                    </Tooltip>

                    <Tooltip title="Change labels" placement="bottom">
                        <div>
                            <NoteFormLabelMenu note={noteForm} onChange={handleLabelsChange} />
                        </div>
                    </Tooltip>

                    <Tooltip title={noteForm.archive ? "Unarchive" : "Archive"} placement="bottom">
                        <div>
                            <IconButton className="w-32 h-32 mx-4 p-0" onClick={handleArchiveToggle} disabled={newFormButtonDisabled()}>
                                <Icon fontSize="small">
                                    {noteForm.archive ? "unarchive" : "archive"}
                                </Icon>
                            </IconButton>
                        </div>
                    </Tooltip>

                    <Tooltip title="More" placement="bottom">
                        <IconButton className="w-32 h-32 mx-4 p-0" onClick={handleToggleFarmInput}>
                            <Icon fontSize="small">more</Icon>
                        </IconButton>
                    </Tooltip>
                </div>
                <div className="flex items-center px-4">
                    {props.variant === "new" ? (
                        <Button
                            className="m-4"
                            onClick={handleOnCreate}
                            variant="outlined"
                            size="small"
                            disabled={newFormButtonDisabled()}
                        >
                            Create
                        </Button>
                    ) : (
                            <Fragment>
                                <Tooltip title="Delete Note" placement="bottom">
                                    <IconButton className="w-32 h-32 mx-4 p-0" onClick={props.onRemove}>
                                        <Icon fontSize="small">delete</Icon>
                                    </IconButton>
                                </Tooltip>
                                <Button
                                    className="m-4"
                                    onClick={props.onClose}
                                    variant="outlined"
                                    size="small"
                                >
                                    Close
                            </Button>
                            </Fragment>
                        )}
                </div>
            </div>
        </div>
    );
}

NoteForm.propTypes = {};
NoteForm.defaultProps = {
    variant: "edit",
    note: null
};

export default withRouter(NoteForm);
