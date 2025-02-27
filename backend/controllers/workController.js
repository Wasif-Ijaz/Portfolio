import Work from '../models/workModel.js';
import asyncHandler from 'express-async-handler';

const works = asyncHandler(async (req, res) => {
  let allWorks = await Work.find({});
  res.status(200).json(allWorks);
});

const addWork = asyncHandler(async (req, res) => {
  const {
    type,
    title,
    description,
    salary,
    location,
    company: { companyName, companyDescription, contactEmail, contactPhone },
  } = req.body;

  let existUser = await Work.findOne({ 'company.contactEmail': contactEmail });
  if (existUser) {
    res.status(401);
    throw new Error('User already exist');
  }

  const work = await Work.create({
    type,
    title,
    description,
    salary,
    location,
    company: {
      companyName,
      companyDescription,
      contactEmail,
      contactPhone,
    },
  });
  if (work) {
    return res.status(201).json({
      _id: work._id,
      title: work.title,
      contactEmail: work.company.contactEmail,
    });
  } else {
    res.status(400);
    throw new Error('Invalid data');
  }
});

const workById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const work = await Work.findById(id);
  res.status(200).json(work);
});

const updateWork = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const existWork = await Work.findById(id);

  existWork.type = req.body.type ?? existWork.type;
  existWork.title = req.body.title ?? existWork.title;
  existWork.description = req.body.description ?? existWork.description;
  existWork.salary = req.body.salary ?? existWork.salary;
  existWork.location = req.body.location ?? existWork.location;

  if (req.body.company) {
    existWork.company.companyName =
      req.body.company.companyName ?? existWork.company.companyName;
    existWork.company.companyDescription =
      req.body.company.companyDescription ??
      existWork.company.companyDescription;
    existWork.company.contactEmail =
      req.body.company.contactEmail ?? existWork.company.contactEmail;
    existWork.company.contactPhone =
      req.body.company.contactPhone ?? existWork.company.contactPhone;
  }

  const updatedWork = await existWork.save();
  res.status(200).json(updatedWork);
});

const deleteWork = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const deletedWork = await Work.findByIdAndDelete(id);
  res.status(200).json({
    _id: deletedWork._id,
    title: deletedWork.title,
    contactEmail: deletedWork.company.contactEmail,
  });
});

export { addWork, updateWork, deleteWork, workById, works };
