const productService = require("../services/product.services");
const Joi = require("joi");
const createProduct = async (req, res) => {
  console.log(req.body);
  const userSchema = Joi.object({
    productName: Joi.string().min(3).max(20).required(),
    Quantity: Joi.number().allow("", null),
  });
  let schemaValidator = userSchema.validate(req.body);
  if (schemaValidator.error) {
    return res.status(400).json({
      message: "Invalid payload",
      error: schemaValidator.error.message,
      status: 400,
    });
  } else {
    productPayload = schemaValidator.value;
  }
  try {
    const condition = {
      productName: productPayload.productName,
    };
    console.log(condition);
    const existingUser = await productService.findOne(condition);
    console.log(existingUser);
    if (existingUser && existingUser.length !== 0) {
      return res.status(409).json({
        message: "product is already exists",
        status: 409,
      });
    } else {
      const payload = {
        ...productPayload,
        creationTs: Date.now(),
      };
      console.log(payload);
      const result = await productService.post(payload);
      console.log(result, "gggggggggggggg");
      return res.status(200).json({
        message: "product create seccuss fully",
        data: result,
        status: 200,
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error!,",
      error,
      status: 500,
    });
  }
};
const getAllProduct = async (req, res) => {
  try {
    const result = await productService.get({});
    if (result && result.length === 0) {
      return res.status(404).json({
        message: "no data found",
        code: 404,
      });
    } else {
      return res.status(200).json({
        message: "data get succuss fully",
        status: 200,
        data: result,
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error!",
      status: 500,
    });
  }
};
const updateproduct = async (req, res) => {
    console.log(req.body,req.params._id);
  const Schema = Joi.object({
    productName: Joi.string().optional(),
    Quantity: Joi.number().optional(),
id:Joi.string().allow(null,null)
  });

  let validateSchema = Schema.validate(req.body);

  // validating payload
  if (validateSchema.error) {
    return res.status(400).json({
      message: validateSchema.error.message || "Bad Request",
      code: 400,
    });
  } else {
    productPayload = validateSchema.value;
  }
  try {
    const condition = {
      _id: req.params._id,
    };
    const payload = {
      ...productPayload,
      updatedOn: Date.now(),
    };

    const result = await productService.updateAllField(condition, payload);

    if (!result) {
      res.status(404).send({
        message: "product doesn't exist with this id!",
        status: 404,
      });
    }
    return res.status(201).send({
      message: "product updated successfully!",
      status: 201,
    });
  } catch (err) {
    console.log("failed : ", err);
    return res.status(500).send({
      message: err.message || "Internal Server Error!",
      code: 500,
    });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const condition = {
      _id: req.params._id,
    };

    const result = await productService.deleteProduct(condition);
    return res.status(201).send({
      message: "product  delete successfully!",
      status: 201,
    });
  } catch (err) {
    console.log("failed : ", err);
    return res.status(500).send({
      message: err.message || "Internal Server Error!",
      code: 500,
    });
  }
};

module.exports = {
  getAllProduct,
  createProduct,
  updateproduct,
  deleteProduct,
};
