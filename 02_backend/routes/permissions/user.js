
import messageConstants from '~/constants/message';
import commonConstants from '~/constants/common';

const assertEditUserValidation = async (user, userId = null) => {
  if (user.id !== userId && user.role !== commonConstants.role.ADMIN) {
    return res.status(401).json({
      message: messageConstants.PERMISSION_MANAGE_USER_ERROR
    });
  }
};

export {
  assertEditUserValidation
};