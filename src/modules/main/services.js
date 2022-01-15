const { v4: uuidv4 } = require("uuid");
const Uuid = require("./model");
const { getPaginatedRecords } = require("../../helpers/paginate");

exports.getUUID = async (data) => {
  try {
    // generate new uuid
    const generatedUUID = uuidv4();
    await Uuid.create({ uuid: generatedUUID });
    // get all uuids
    const uuids = await getPaginatedRecords(Uuid, {
      limit: data.limit,
      page: data.page,
      data: {},
      sortFilter : {createdAt: -1},
      selectedFields: "uuid createdAt -_id",
    });
    return {
      error: false,
      data: uuids,
    };
  } catch (err) {
    console.log(err?.response?.data || err);
    return {
      error: true,
      message: "Error getting UUID",
      data: err?.response?.data || err,
    };
  }
};
