import { Search } from '@mui/icons-material';
import { InputAdornment, MenuItem, TextField } from '@mui/material';
import { blue, grey } from '@mui/material/colors';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import ToggleDisplayButton from './ToggleDisplayButton';

function AdminSearchBar() {
    const [showOption, setShowOption] = useState(10);
    const theme = useTheme();
    const matchXSScreen = useMediaQuery(theme.breakpoints.up('sm'));

    const handleChange = (event) => {
        setShowOption(event.target.value);
    };

    return (
        <Box sx={{
            width: '100%',
            height: 'auto',
            pb: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 1,
            flexWrap: 'wrap'
        }}>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: 1
            }}>
                <TextField
                // { ...signinForm.register('username') }
                    size="medium"
                    autoComplete="true"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <Search />
                            </InputAdornment>
                        )
                    }}
                    spellCheck="false"
                    placeholder="Nhập từ khóa tìm kiếm"
                    name="username"
                    type="text"
                    // error={!!signinForm.formState.errors.username}
                    // helperText={signinForm.formState.errors.username?.message ?? ''}
                    sx={{
                        minWidth: {
                            xs: '100%',
                            sm: 300
                        },
                        bgcolor: '#fff',
                        '.Mui-focused': { border: 'none', outline: 'none' },
                        '& ::placeholder': { fontSize: 18, color: grey[900] },
                        '& input': {
                        // color: grey[700]
                        },
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderColor: grey[400]
                            },
                            '&:hover fieldset': {
                                borderColor: blue[500]
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: blue[500]
                            }
                        }
                    }}
                />
                <TextField
                    select
                    value={showOption}
                    onChange={handleChange}
                    sx={{
                        minWidth: 160,
                        '& div': {
                            fontSize: 16
                        }
                    }}
                >
                    <MenuItem value={30}>Xếp mặc định</MenuItem>
                    <MenuItem value={10}>A -&gt; Z</MenuItem>
                    <MenuItem value={20}>Z -&gt; A</MenuItem>
                </TextField>
                {!matchXSScreen && <ToggleDisplayButton/>}
            </Box>
            {matchXSScreen && <ToggleDisplayButton/>}
        </Box>
    );
}

export default AdminSearchBar;