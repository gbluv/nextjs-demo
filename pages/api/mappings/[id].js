const handler = (req,res) => {
  const {body: {id} = {}} = req;
  const mappings = [
    {id:1,janusid: 'e1111',profile: '11111'},
    {id:2,janusid: 'e2222',profile: '2222'}
  ]
  if(req.method === "POST"){
    res.status(200).send(mappings.find(m => m.id === id))
  }
}
export default  handler;

