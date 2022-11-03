const mongoose = require('mongoose')
const commentSchema = require('./comment')


const reviewSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true
		},
		content: {
			type: String
		},
		generalRating: {
			type: Number,
            required: true
		},
        startingPosition: {
            type: String,
		enum: ['Intern', 'Junior', 'Senior', 'Manager']
        },
        startingSalary: {
            type: Number
        },
		owner: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User'
		},
		company: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Company'
		},
		comments: [commentSchema]
	},
)

module.exports = mongoose.model('Review', reviewSchema)
