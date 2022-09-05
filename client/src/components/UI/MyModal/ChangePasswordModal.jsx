import React from 'react';
import { useInput } from '../../../hooks/useInput';

const ChangePasswordModal = ({ modal, setModal }) => {
  const oldPassword = useInput('', { isEmpty: true });
  const newPassword = useInput('', { isEmpty: true });
  const confirmPassword = useInput('', { isEmpty: true });

  const handleClick = () => {
    // проверка на валидность старого пароля
  };

  return (
    <div>
      {modal && (
        <div className="update-user-modal" onClick={() => setModal(false)}>
          <div
            className="modal-password-massage"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="main-modal-title">Change your password...</div>
            <div className="change-password-inputs">
              <div className="input">
                {oldPassword.isDirty && oldPassword.isEmpty && (
                  <div className="not-valid-massange">
                    Поле не может быть пустым
                  </div>
                )}
                <input
                  type="password"
                  className="input-field"
                  value={oldPassword.value}
                  onChange={oldPassword.onChange}
                  onBlur={oldPassword.onBlur}
                  required
                />
                <label className="input-label">Old password</label>
              </div>
              <div className="input">
                {newPassword.isDirty && newPassword.isEmpty && (
                  <div className="not-valid-massange">
                    Поле не может быть пустым
                  </div>
                )}
                <input
                  type="password"
                  className="input-field"
                  value={newPassword.value}
                  onChange={newPassword.onChange}
                  onBlur={newPassword.onBlur}
                  required
                />
                <label className="input-label">New password</label>
              </div>
              <div className="input">
                {confirmPassword.isDirty && confirmPassword.isEmpty && (
                  <div className="not-valid-massange">
                    Поле не может быть пустым
                  </div>
                )}
                <input
                  type="password"
                  className="input-field"
                  value={confirmPassword.value}
                  onChange={confirmPassword.onChange}
                  onBlur={confirmPassword.onBlur}
                  required
                />
                <label className="input-label">Confirm password</label>
              </div>
            </div>
            <button
              className="btn-add-to-cart change-password-btn"
              disabled={
                !oldPassword.inputValid ||
                !newPassword.inputValid ||
                !confirmPassword.inputValid
              }
              onClick={handleClick}
            >
              Change password
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChangePasswordModal;
