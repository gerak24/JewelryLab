import express from 'express'
import { createServer as createViteServer } from 'vite'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

// ESM аналог __dirname
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

async function start() {
    const app = express()

    // создаём Vite dev server
    const vite = await createViteServer({
        server: { middlewareMode: true },
        appType: 'custom'
    })

    // Vite middleware первыми
    app.use(vite.middlewares)

    // SPA fallback для React Router
    app.use(/.*/, async (req, res) => {
        try {
            const url = req.originalUrl

            // читаем index.html с диска
            const template = fs.readFileSync(
                path.resolve(__dirname, 'index.html'),
                'utf-8'
            )

            // трансформируем через Vite
            const html = await vite.transformIndexHtml(url, template)

            res.status(200).set({ 'Content-Type': 'text/html' }).end(html)
        } catch (e) {
            vite.ssrFixStacktrace(e)
            console.error(e)
            res.status(500).end(e.message)
        }
    })

    app.listen(5173, () => {
        console.log('Dev server running: http://localhost:5173')
    })
}

start()