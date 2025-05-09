'use client'

import { useState } from 'react'

import { Button, TextField, Box, Typography, Paper } from '@mui/material'

export default function ChatBox() {

    const chatUrl = process.env.NEXT_PUBLIC_SERVER_URL;
    const uiPath = process.env.NEXT_PUBLIC_UI_PATH;

    const archImageSrc = `https://raw.githubusercontent.com/datawire/blackbird-demos/refs/heads/main/ai-chatbot/docs/${uiPath}.png`;

    const [data, setData] = useState({ response: "", timestamp: "" })
    const [chat, setChat] = useState("In a sentence, describe Ambassador's new API development tool: Blackbird")
    const [isLoading, setLoading] = useState(false)

    const submitChatMessage = () => {

        setLoading(true)

        fetch(`${chatUrl}/chat`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                message: chat
            })
        })
            .then((res) => res.json())
            .then((data) => {
                setData(data)
                setLoading(false)
            })
            .catch((e) => {
                setData("")
                setLoading(false)
            })
    }

    return (
        <Paper id="chatbox" elevation={4} >
            <Box>
                <Typography variant='h4'>How can I help you today?</Typography>
            </Box>
            <Box sx={{ mt: 4 }}>
                <TextField
                    label="Chat Message"
                    onChange={e => setChat(e.target.value)}
                    value={chat}
                    fullWidth
                    multiline
                    rows={4}
                    variant="outlined"
                />
            </Box>
            <Box sx={{ mt: 2 }}>
                <Button onClick={submitChatMessage} variant="contained">Submit</Button>
            </Box>
            <Box sx={{ mt: 2 }}>
                {isLoading ?
                    <p>Response: Loading...</p>
                    :
                    <p>Response: {data.response}</p>
                }
            </Box>
            <hr />
            <Box>
                <img src={archImageSrc} />
            </Box>
        </Paper>
    )
}