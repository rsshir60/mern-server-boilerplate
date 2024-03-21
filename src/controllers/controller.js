const TestMe =  (req, res) => {
    res.status(200).json({ message: "All the best for your web development path!" });
  };

  const Postreq =  (req, res) => {
    res.status(200).json({ status : true, message: "congragulations...! this is your first simple post request" });
  };

  const PostData =  (req, res) => {
    let id = req.body.userName
    let pass = req.body.Password

    const data = {id,pass}
    res.status(200).json({ status : true, message : data });
  };
  const TaskArray =  (req, res) => {
   let arr = ["RANJEET","SANJAY"]
   const Lastname = req.body.Lastname
   arr.push(Lastname)

    res.status(200).json({ status : true, message : arr });
  };

  const Empty = (req, res) => { 
    return res.status(400).send({status:false, message:"check your URL"})
 };

  module.exports = {TestMe, Empty, Postreq,PostData ,TaskArray }