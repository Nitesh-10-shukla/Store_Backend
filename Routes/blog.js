var Blog = require("../Modal/blog");

exports.blog=(req,res)=>{
    const blog =new Blog({
        heading:req.body.heading,
        image:req.body.image,
        description:req.body.description
    })
    blog.save((err, user) => {
        if (err) {
          res.status(500)
            .send({
              message: err
            });
          return;
        } else {
          res.status(200)
            .send({
              message: "Blog added successfully"
            })
        }
      });
}
