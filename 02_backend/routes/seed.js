
import databaseSeed from '~/database/seeds';
import commonConstants from '~/constants/common';
import messageConstants from '~/constants/message';

exports.initSeed = async (req, res) => {
  try {
    const { password } = req.params;

    if (password === commonConstants.PLATFORM_PASSWORD) {
      await databaseSeed.initSeed();
      return res.status(200).send({
        message: messageConstants.SEED_SUCCESS
      });
    } else {
      return res.status(500).send({
        message: messageConstants.WRONG_PASSWORD
      });
    }
  } catch (error) {
    console.log('[routes SeedAPI initSeed] error => ', error);
    return res.status(500).send({
      message: messageConstants.SOMETHING_WENT_WRONG
    });
  }
}

exports.dropSeed = async (req, res) => {
  try {
    const { password } = req.params;

    if (password === commonConstants.PLATFORM_PASSWORD) {
      await databaseSeed.dropSeed();
      return res.status(200).send({
        message: messageConstants.SEED_SUCCESS
      });
    } else {
      return res.status(500).send({
        message: messageConstants.WRONG_PASSWORD
      });
    }
  } catch (error) {
    console.log('[routes SeedAPI dropSeed] error => ', error);
    return res.status(500).send({
      message: messageConstants.SOMETHING_WENT_WRONG
    });
  }
}