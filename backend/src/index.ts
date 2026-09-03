    import express, { type Express, type Request, type Response } from 'express';

    const app: Express = express();
    const port = 3000;

    const contatos = [
        {id: 1, nome: "Marcos", email: "Sim@teste.com"},
        {id: 2, nome: "Marlon", email: "Mirlon20@teste.com"},
        {id: 3, nome: "Mauro", email: "MeuNomeMauro23@teste.com"},
    ]

    app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!');
    });

    app.get('/api/contatos',(req: Request, res: Response) => {
      res.json(contatos);
    });

    app.listen(port, () => {
    console.log(`Servidor Iniciado em: http//localhost:${port}`);
    });