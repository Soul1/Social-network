import React from 'react';
import classes from './Settings.module.css';

const Settings = ({isOwner, savePhoto }) => {

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length){
      savePhoto(e.target.files[0])
    }
  };

  return (
    <div>
      {isOwner && <input type="file" onChange={onMainPhotoSelected}/>}
    </div>
  );
};


export default Settings;