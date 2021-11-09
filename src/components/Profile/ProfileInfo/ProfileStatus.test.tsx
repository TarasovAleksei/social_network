import React from "react";
import {ProfileStatus} from "./ProfileStatus";
import {create} from 'react-test-renderer'

describe('total', () => {
    test('status from props should be in the state', () => {
        // const component = TestRenderer.create(<ProfileStatus isMe={true} updateStatusCB={() => {
        //     alert('aa')}} status={'some status'}/>)
        // const testInstanse = component.root
        // expect(testInstanse.findByType(ProfileStatus).props.status).toBe('some status')
        // const component = create(<ProfileStatus status={'some status'} isMe={true} updateStatusCB={() => {
        //     console.log('hey')
        // }}/>)
        // const instance = component.getInstance()
    })
    test('should be span', () => {
        // const component = create(<ProfileStatus status={'some status'} isMe={true} updateStatusCB={() => {
        //     console.log('hey')
        // }}/>)
        // const instance = component.getInstance()
        // const span = instance!.findByType('span')
        // expect(span.length).toBe(1)
    })
})