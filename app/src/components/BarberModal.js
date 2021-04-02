/* eslint-disable prettier/prettier */
import React from 'react';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';

import ExpandIcon from '../assets/expand.svg';

const Modal = styled.Modal`

`;

const ModalArea = styled.View`
    flex: 1;
    background-color: rgba(0, 0, 0, 0.5);
    justify-content: flex-end;
`;

const ModalBody = styled.View`
    background-color: #83d6e3;
    border-top-left-radius: 20px; 
    border-top-right-radius: 20px;
    min-height: 300px;
    padding: 10px 20px 40px 20px;
`;

const CloseButton = styled.TouchableOpacity`
    width: 40px;
    height: 40px;
`;

export default ({show, setShow, user, service}) => {

    const handleCloseButton = () => {
        setShow(false);
    }

    return (
        <Modal
            transparent={true}
            visible={show}
            animationType="slide"
        >
                <ModalArea>
                    <ModalBody>
                        <CloseButton onPress={handleCloseButton}>
                            <ExpandIcon width="40" height="40" fill="#000000" />
                        </CloseButton>
                    </ModalBody>
                </ModalArea>

        </Modal>
    )
}
