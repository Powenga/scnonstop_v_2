import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import AddNewsForm from '../components/Form/AddNewsForm';
import AddSpecialistForm from '../components/Form/AddSpecialistForm';
import EditNewsForm from '../components/Form/EditNewsForm';
import EditSpecForm from '../components/Form/EditSpecForm';
import Modal from '../components/Modal/Modal';
import ModalConfirm from '../components/Modal/ModalConfirm';
import NewsContent from '../components/Modal/NewsContent';
import modalContext from '../context/modal-context';
import {
  MODAL_TYPES_ADD_NEWS,
  MODAL_TYPES_ADD_SPEC,
  MODAL_TYPES_CONFIRM_DELETE_NEWS,
  MODAL_TYPES_CONFIRM_DELETE_SPEC,
  MODAL_TYPES_EDIT_NEWS,
  MODAL_TYPES_EDIT_SPEC,
  MODAL_TYPES_SHOW_NEWS,
} from '../utils/constants';
import { newsPropTypes, specsPropTypes } from '../utils/prop-types';

const Modals = ({
  currentNews,
  handleDeleteNews,
  currentSpec,
  handleDeleteSpec,
}) => {
  const [modal] = useContext(modalContext);
  const { isOpen, modalType } = modal;
  if (!isOpen) {
    return null;
  }
  if (modalType === MODAL_TYPES_ADD_NEWS) {
    return (
      <Modal>
        <AddNewsForm />
      </Modal>
    );
  }
  if (modalType === MODAL_TYPES_CONFIRM_DELETE_NEWS) {
    return (
      <Modal>
        <ModalConfirm
          title="Удалить новость?"
          data={currentNews}
          onConfirm={handleDeleteNews}
          confirmMessage="Новость успешно удалена. Пожалуйста, перезагрузите страницу"
        />
      </Modal>
    );
  }
  if (modalType === MODAL_TYPES_CONFIRM_DELETE_SPEC) {
    return (
      <Modal>
        <ModalConfirm
          title="Вы уверены что хотите удалить этого мастера?"
          data={currentSpec}
          onConfirm={handleDeleteSpec}
          confirmMessage="Мастер успешно удален. Пожалуйста, перезагрузите страницу"
        />
      </Modal>
    );
  }
  if (modalType === MODAL_TYPES_EDIT_NEWS) {
    return (
      <Modal>
        <EditNewsForm news={currentNews} />
      </Modal>
    );
  }
  if (modalType === MODAL_TYPES_SHOW_NEWS) {
    return (
      <Modal>
        <NewsContent news={currentNews} />
      </Modal>
    );
  }
  if (modalType === MODAL_TYPES_ADD_SPEC) {
    return (
      <Modal>
        <AddSpecialistForm />
      </Modal>
    );
  }
  if (modalType === MODAL_TYPES_EDIT_SPEC) {
    return (
      <Modal>
        <EditSpecForm spec={currentSpec} />
      </Modal>
    );
  }
  return null;
};

export default Modals;

Modals.propTypes = {
  currentNews: newsPropTypes.isRequired,
  handleDeleteNews: PropTypes.func.isRequired,
  currentSpec: specsPropTypes.isRequired,
  handleDeleteSpec: PropTypes.func.isRequired,
};
