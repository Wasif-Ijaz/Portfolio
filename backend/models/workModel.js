import mongoose from 'mongoose';

const companySchema = mongoose.Schema({
  companyName: {
    type: String,
    required: true,
  },
  companyDescription: {
    type: String,
    required: true,
  },
  contactPhone: {
    type: String,
    required: true,
  },
  contactEmail: {
    type: String,
    required: true,
  },
});

const workSchema = mongoose.Schema(
  {
    type: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    salary: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    company: companySchema,
  },
  {
    timestamps: true,
  }
);

const Work = mongoose.model('Work', workSchema);
export default Work;
