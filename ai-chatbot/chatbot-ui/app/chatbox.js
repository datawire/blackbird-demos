'use client'

import { useState } from 'react'

import { Button, TextField, Box, Typography, Paper } from '@mui/material'

export default function ChatBox() {

    const chatUrl = process.env.NEXT_PUBLIC_SERVER_URL;

    const [data, setData] = useState({ response: "", timestamp: "" })
    const [chat, setChat] = useState("What's the weather like in Colorado?")
    const [isLoading, setLoading] = useState(false)

    const submitChatMessage = () => {
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
    }

    return (
        <Paper id="chatbox" elevation={2} >
            <Box>
                <Typography variant='h4'>Submit a chat message!</Typography>
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
                    <p>Loading...</p>
                    :
                    <p>AI Response: {data.response}</p>
                }
            </Box>
        </Paper>
    )
}