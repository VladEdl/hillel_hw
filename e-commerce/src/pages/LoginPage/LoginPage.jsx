import { Box, Container, Typography, TextField, Button, CircularProgress, Alert } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { setCredentials } from '@store/authSlice';
import { useNavigate } from 'react-router';
import { useState } from 'react';

const LoginPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        setIsLoading(true);
        setError('');
        try {
            const response = await fetch('https://dummyjson.com/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    username: data.username,
                    password: data.password,
                }),
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.message || 'Invalid credentials');
            }

            dispatch(setCredentials({
                user: result,
                token: result.accessToken,
            }));

            navigate('/');
        } catch (err) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Container maxWidth="sm" sx={{ py: 8 }}>
            <Box sx={{
                border: '1px solid #e0e0e0',
                borderRadius: 3,
                p: 4,
            }}>
                <Typography variant="h4" fontWeight="bold" textAlign="center" mb={1}>
                    Welcome
                </Typography>
                <Typography variant="body2" color="text.secondary" textAlign="center" mb={4}>
                    Please enter your details to sign in
                </Typography>

                {error && (
                    <Alert severity="error" sx={{ mb: 2 }}>
                        {error}
                    </Alert>
                )}

                <Box component="form" onSubmit={handleSubmit(onSubmit)}>
                    <Typography fontWeight="bold" mb={1}>Username</Typography>
                    <TextField
                        fullWidth
                        placeholder="Enter your username"
                        {...register('username', { required: 'Username is required' })}
                        error={!!errors.username}
                        helperText={errors.username?.message}
                        sx={{ mb: 3 }}
                    />

                    <Typography fontWeight="bold" mb={1}>Password</Typography>
                    <TextField
                        fullWidth
                        type="password"
                        placeholder="Enter your password"
                        {...register('password', {
                            required: 'Password is required',
                            minLength: { value: 4, message: 'Password must be at least 4 characters' }
                        })}
                        error={!!errors.password}
                        helperText={errors.password?.message}
                        sx={{ mb: 4 }}
                    />

                    <Button
                        type="submit"
                        variant="contained"
                        fullWidth
                        disabled={isLoading}
                        sx={{
                            backgroundColor: '#000',
                            borderRadius: 5,
                            py: 1.5,
                            '&:hover': { backgroundColor: '#333' },
                        }}
                    >
                        {isLoading ? <CircularProgress size={24} color="inherit" /> : 'Sign In'}
                    </Button>
                </Box>

                <Typography variant="body2" color="text.secondary" textAlign="center" mt={3}>

                </Typography>
            </Box>
        </Container>
    );
};

export default LoginPage;