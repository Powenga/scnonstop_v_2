import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import AddNewsForm from '../Form/AddNewsForm';
import AddSpecialistForm from '../Form/AddSpecialistForm';
import EditNewsForm from '../Form/EditNewsForm';
import EditSpecForm from '../Form/EditSpecForm';
import Modal from '../Modal/Modal';
import ModalConfirm from '../Modal/ModalConfirm';
import NewsContent from '../Modal/NewsContent';
import modalContext from '../../context/modal-context';
import {
  MODAL_TYPES_ADD_NEWS,
  MODAL_TYPES_ADD_SPEC,
  MODAL_TYPES_CONFIRM_DELETE_NEWS,
  MODAL_TYPES_CONFIRM_DELETE_SPEC,
  MODAL_TYPES_EDIT_NEWS,
  MODAL_TYPES_EDIT_SPEC,
  MODAL_TYPES_MORE,
  MODAL_TYPES_OWN_BRAND,
  MODAL_TYPES_OWN_PROBLEM,
  MODAL_TYPES_SHOW_ADVANTAGE,
  MODAL_TYPES_SHOW_NEWS,
} from '../../utils/constants';
import {
  advatnagePropTypes,
  newsPropTypes,
  specsPropTypes,
} from '../../utils/prop-types';
import OwnProblemForm from '../Form/OwnProblemForm';
import OwnBrandForm from '../Form/OwnBrandForm';
import MoreContent from '../Modal/MoreContent';
import AdvantageContent from '../Modal/AdvantageContent';

const Modals = ({
  currentNews,
  handleDeleteNews,
  currentSpec,
  handleDeleteSpec,
  orderState,
  currentAdvantage,
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
  if (modalType === MODAL_TYPES_OWN_PROBLEM) {
    return (
      <Modal>
        <OwnProblemForm orderState={orderState} />
      </Modal>
    );
  }
  if (modalType === MODAL_TYPES_OWN_BRAND) {
    return (
      <Modal>
        <OwnBrandForm orderState={orderState} />
      </Modal>
    );
  }
  if (modalType === MODAL_TYPES_MORE) {
    return (
      <Modal>
        <MoreContent />
      </Modal>
    );
  }
  if (modalType === MODAL_TYPES_SHOW_ADVANTAGE) {
    return (
      <Modal>
        <AdvantageContent card={currentAdvantage} />
      </Modal>
    );
  }
  return null;
};

export default Modals;

Modals.propTypes = {
  currentNews: PropTypes.oneOfType([newsPropTypes, PropTypes.object]),
  handleDeleteNews: PropTypes.func,
  currentSpec: PropTypes.oneOfType([specsPropTypes, PropTypes.object]),
  handleDeleteSpec: PropTypes.func,
  orderState: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  ).isRequired,
  currentAdvantage: PropTypes.oneOfType([advatnagePropTypes, PropTypes.object]),
};

Modals.defaultProps = {
  currentNews: {},
  handleDeleteNews: () => {},
  currentSpec: {},
  handleDeleteSpec: () => {},
  currentAdvantage: {},
};
