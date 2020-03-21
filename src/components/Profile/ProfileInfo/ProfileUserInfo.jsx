import React, {useState} from 'react';
import {createField, Input, Textarea} from "../../common/FormsControls/FormsControls";
import {reduxForm} from "redux-form";
import s from "./ProfileInfo.module.css";

const ProfileData = ({profile, isOwner}) => {
  const [editMode, setEditMode] = useState(true);

  const activateEditMode = () => {
    setEditMode(true)
  };
  const deactivateEditMode = () => {
    setEditMode(false);

  };

  const onSubmit = (formData) => {
    console.log(formData)
  };
  return (
    <div>

      <div className={s.userName}>{profile.fullName}</div>
      <div>{profile.aboutMe || null}</div>

      <div>
       {isOwner && <div>{editMode
          ? <div onClick={deactivateEditMode}>Изменить</div>
          : <div onClick={activateEditMode}>Сохранить</div>}</div>}
        <div>
          {editMode && <div><b>Ищу работу: </b> {profile.lookingForAJob ? 'да' : 'нет'}</div>}
          {profile.lookingForAJob &&
          <div><b>Мои навыки</b> {profile.lookingForAJobDescription}</div>}
        </div>
        <div>
          {editMode ? "Мои контакты:" : 'Настройки:'}{
          editMode ?
            Object.keys(profile.contacts)
              .filter(key => {
                return profile.contacts[key] !== null
              })
              .map(key => {
                return <ContactData key={key} contactTitle={key} contactValue={profile.contacts[key]}
                />
              })
            : <ProfileReduxForm onSubmit={onSubmit} profile={profile}/>

        }
        </div>
      </div>
    </div>
  )

};

const ContactData = ({contactTitle, contactValue}) => {
  return <div><b>{contactTitle}:</b> {contactValue}</div>
};

const ProfileForm = ({handleSubmit, profile}) => {

  return <form onSubmit={handleSubmit}>
    <div><b>Ищу работу: </b>
      {createField("", 'lookingForAJob',
        Input, [], 'checkbox', profile.lookingForAJob)}
    </div>

    <div><b>Мои навыки:</b> {createField("", 'mySkillsValue',
      Textarea, [], 'text', profile.lookingForAJobDescription)}</div>

    <b>facebook:</b>
    {createField("", 'facebookValue',
      Input, [], 'text', profile.contacts.facebook)}
  </form>
};
const ProfileReduxForm = reduxForm({form: 'contact'})(ProfileForm);

export default ProfileData;