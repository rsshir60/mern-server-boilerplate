const TestMe =  (req, res) => {
    res.status(200).json({ message: "All the best for your web development path!" });
  };

  const Empty = (req, res)=>{ 
    return res.status(400).send({status:false, message:"check your URL"})
 };

  module.exports = {TestMe, Empty}