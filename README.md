# Coding-Marathon2


# What 
##     jobSchema.set('toJSON', {
##    virtuals: true,
##    transform: (doc, ret) => {
##        ret.id = ret._id;
##        delete ret._id;
##        delete ret.__v;
##        return ret;
##    }
##    });