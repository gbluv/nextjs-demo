const handler = (req,res) => {
 if(req.method === "POST"){
  res.status(200).send([
   {janusid: 'e1111',profile: '11111'},
   {janusid: 'e2222',profile: '2222'}
  ])
 }
}
export default  handler;

