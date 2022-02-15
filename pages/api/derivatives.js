const handle = async (req,res) => {
  const {body: { id } = {}} = req;
  const derivatives = [
    {id:1,name: "derv1"},
    {id:2,name: "derv2"},
    {id:3,name: "derv3"}
  ]
  res.status(200).send(derivatives.find(d => d.id == id))
}

export default handle;
