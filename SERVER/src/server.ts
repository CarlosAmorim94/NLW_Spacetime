import fastty from 'fastify';

const app = fastty();

app.get('/hello', ()=> {
  return 'Hello World';
})

app.listen({
  port: 3333
}).then(() => {
  console.log('💻 Server is running on port 3333 🚀');
})
