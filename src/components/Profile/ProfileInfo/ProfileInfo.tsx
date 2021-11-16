import React, {ChangeEvent, useState} from "react";
import {changeEditMode, ProfileType, StatusType} from "../../redux/profileReducer";
import classes from './ProfileInfo.module.css';
import userDefaultPhoto from "../../../assets/images/no_foto.jpeg";
import {Preloader} from "../../common/preloader/Preloader";
import {ProfileStatus} from "./ProfileStatus";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {InitialStateType} from "../../redux/authReducer";
import {SubmitHandler, useForm} from "react-hook-form";


export const ProfileInfo = React.memo((props: PropsType) => {
        const dispatch = useDispatch()
        const onChangePhoto = (e: ChangeEvent<HTMLInputElement>) => {
            const formData = new FormData()
            const newFile = e.target.files && e.target.files[0];
            if (newFile) {
                formData.append('image', newFile);
                props.savePhoto(formData)
                console.log(typeof formData)
            }
        }
        return (<>
                {!Object.keys(props.profile).length &&
                <Preloader/>} {
                Object.keys(props.profile).length &&
                <div className={classes.container}>
                    <div className={classes.avatar}>
                        <img src={props.profile.photos.large || userDefaultPhoto}
                             alt="ava"/>
                        <div className={classes.choosingPhoto}>
                            {props.isMe &&
                            <input style={{'height': '30px'}} type="file" onChange={onChangePhoto}/>}
                        </div>
                    </div>

                    <div className={classes.description}>
                        {props.editMode ?
                            <ContactsForm
                                onChangeEditMode={() => {
                                    dispatch(changeEditMode(false))
                                }}
                                updateProfileCB={props.updateProfileCB}
                                profile={props.profile}
                            />
                            : <Contacts profile={props.profile}/>}
                        {props.isMe && <button style={{'height': '20px'}} onClick={() => {
                            dispatch(changeEditMode(true))
                        }}>
                            edit
                        </button>}
                        <div>
                            {props.isMe ?
                                <ProfileStatus status={props.status}
                                               isMe={props.isMe}
                                               updateStatusCB={props.updateStatusCB}
                                /> :
                                <div>
                                    <span>{props.status ? props.status : 'no status'}</span>
                                </div>
                            }
                        </div>
                    </div>
                </div>}
            </>
        )
    }
)
const Contacts: React.FC<{ profile: ProfileType }> = ({profile}) => {
    return <div className={classes.contacts}>
        <div>
            Name: {profile.fullName}
        </div>
        Contacts:
        <div>vk: {profile.contacts.vk}</div>
        <div>facebook: {profile.contacts.facebook}</div>
        <div>github: {profile.contacts.github}</div>
        <div>twitter: {profile.contacts.twitter}</div>
        <div>instagram: {profile.contacts.instagram}</div>
        <div>website: {profile.contacts.website}</div>
        <div>youtube: {profile.contacts.youtube}</div>
        <div>
            Looking for a job:
            {profile.lookingForAJob ? 'yes' : 'no'}
        </div>
        <div>{profile.lookingForAJob ? profile.lookingForAJobDescription : ''}</div>
        <div>
            About me: {
            profile.aboutMe
        }
        </div>
    </div>
}
const ContactsForm: React.FC<ContactsFormForProfile> = ({profile, updateProfileCB, onChangeEditMode}) => {
    const {message} = useSelector<AppStateType, InitialStateType>(state => state.auth)
    const {register, handleSubmit, formState: {errors}} = useForm<InputsForFormProfile>({mode: "onChange"});
    const onSubmit: SubmitHandler<InputsForFormProfile> = (data) => {
        updateProfileCB({
            userId: profile.userId,
            fullName: data.fullName,
            aboutMe: data.aboutMe,
            lookingForAJob: data.lookingForAJob,
            lookingForAJobDescription: data.lookingForAJobDescription,
            contacts: data.contacts,
        })
    }
    return <>
        <div className={classes.contacts}>
            <div>
                please edit your profile
            </div>
            <form className={classes.containerForInputs} onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <div>
                        Name:
                    </div>
                    <div>
                        <input placeholder="fullName" {...register('fullName', {maxLength: 50})} />
                        {errors.fullName && <span>field is errored</span>}
                    </div>
                </div>
                <div>
                    <div>
                        About me:
                    </div>
                    <div>
                        <input placeholder="aboutMe"{...register("aboutMe", {maxLength: 150})} />
                        {errors.aboutMe && <span>field is errored</span>}
                    </div>
                </div>
                <div>
                    <div>
                        lookingForAJob:
                    </div>
                    <div>
                        <input type='checkbox'{...register("lookingForAJob")} />
                        {message && <div className={classes.errorMessage}>{message}</div>}
                    </div>
                </div>
                <div>
                    <div>
                        lookingForAJobDescription:
                    </div>
                    <div>
                        <input placeholder="lookingForAJobDescription"{...register("lookingForAJobDescription", {
                            maxLength: 50
                        })} />
                        {errors.lookingForAJobDescription && <span>field is errored</span>}
                    </div>
                </div>
                <div>
                    Contacts:
                </div>
                <div>vk:</div>
                <div>
                    <input placeholder="vk"{...register("contacts.vk", {

                        maxLength: 150
                    })} />
                    {errors.contacts?.vk && <span>field is errored</span>}
                </div>
                <div>facebook:</div>
                <div>
                    <input placeholder="facebook"{...register("contacts.facebook", {

                        maxLength: 150
                    })} />
                    {errors.contacts?.facebook && <span>field is errored</span>}
                </div>
                <div>github:</div>
                <div>
                    <input placeholder="github"{...register("contacts.github", {

                        maxLength: 150
                    })} />
                    {errors.contacts?.github && <span>field is errored</span>}
                </div>
                <div>twitter:</div>
                <input placeholder="twitter"{...register("contacts.twitter", {

                    maxLength: 150
                })} />
                {errors.contacts?.twitter && <span>field is errored</span>}
                <div>instagram:</div>
                <div>
                    <input placeholder="instagram"{...register("contacts.instagram", {

                        maxLength: 150
                    })} />
                    {errors.contacts?.instagram && <span>field is errored</span>}
                </div>
                <div>website:</div>
                <div>
                    <input placeholder="website"{...register("contacts.website", {
                        maxLength: 150
                    })} />
                    {errors.contacts?.website && <span>field is errored</span>}
                </div>
                <div>youtube:</div>
                <div>
                    <input placeholder="youtube"{...register("contacts.youtube", {
                        maxLength: 150
                    })} />
                    {errors.contacts?.youtube && <span>field is errored</span>}
                </div>
                <input value={'Save'} type="submit"/>

            </form>
            <button onClick={onChangeEditMode}>
                cancel
            </button>
        </div>
    </>
}

//types
interface ContactsFormForProfile {
    profile: ProfileType
    updateProfileCB: (profile: InputsForFormProfile) => void
    onChangeEditMode: () => void
}

export type InputsForFormProfile = {
    userId: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    aboutMe: string
    contacts?: {
        github: string
        vk: string
        facebook: string
        instagram: string
        twitter: string
        website: string
        youtube: string
    }
};
type PropsType = {
    profile: ProfileType,
    status: StatusType,
    updateStatusCB: (status: StatusType) => void,
    isMe: boolean,
    savePhoto: (photo: any) => void
    updateProfileCB: (profile: InputsForFormProfile) => void
    changeEditModeCB: (editMode: boolean) => void
    editMode: boolean
}
