// import React from 'react';
// import PropTypes from 'prop-types';
// import { Box } from '@mui/system';
// import { Avatar, IconButton, Typography } from '@mui/material';
// import { Block, LocalOffer, MarkChatReadOutlined, MoreHoriz } from '@mui/icons-material';
// import { blue, grey, red } from '@mui/material/colors';

// SquareQuestionBox.propTypes = {
//     item: PropTypes.object.isRequired
// };

// function SquareQuestionBox(props) {
//     const { item } = props;
//     const { time, content, title, owner, ownerAvatar, tags, label, commentCount, createAt } = item;

//     return (
//         <Box sx={{
//             width: '100%',
//             height: '100%',
//             bgcolor: '#fff',
//             display: 'flex',
//             justifyContent: 'flex-start',
//             alignItems: 'flex-start',
//             flexDirection: 'column',
//             boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
//             p: '24px 30px',
//             boxSizing: 'border-box',
//             borderRadius: 2,
//             overflow: 'hidden',
//             position: 'relative',
//             transition: 'all .25s ease'
//             // '&:hover': {
//             //     transform: 'translateY(-6px)',
//             //     boxShadow: 'rgba(149, 157, 165, 0.4) 0px 8px 24px'
//             // }
//         }}>
//             <Box sx={{
//                 width: '100%',
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'space-between'
//             }}>
//                 <Box sx={{
//                     display: 'flex',
//                     alignItems: 'center',
//                     gap: 1
//                 }}>
//                     {
//                         item.status === 1
//                             ? <IconButton sx={{ bgcolor: '#E5F9FD!important' }} disabled>
//                                 <LocalOffer sx={{ fontSize: 16, color: blue[400] }}/>
//                             </IconButton>
//                             : <IconButton sx={{ bgcolor: '#fde7e5!important' }} disabled>
//                                 <Block sx={{ fontSize: 16, color: red[400] }}/>
//                             </IconButton>
//                     }
//                     <Typography sx={{
//                         color: grey[600],
//                         fontWeight: 700,
//                         fontSize: 16
//                     }}>
//                     Ticket #{item.label}
//                     </Typography>
//                 </Box>
//                 <IconButton sx={{

//                 }}
//                 // onClick={handleOpenMenu}
//                 >
//                     <MoreHoriz sx={{ color: grey[400] }}/>
//                 </IconButton>
//             </Box>
//             <Typography sx={{
//                 fontSize: 18,
//                 fontWeight: 700,
//                 color: grey[700]
//             }}>
//                 {item.title}
//             </Typography>
//             <Typography sx={{
//                 fontSize: 16,
//                 color: grey[600],
//                 display: '-webkit-box',
//                 WebkitLineClamp: 2,
//                 WebkitBoxOrient: 'vertical',
//                 overflow: 'hidden',
//                 textOverflow: 'ellipsis',
//                 mb: 1
//             }}>
//                 {item.content}
//             </Typography>
//             <Box sx={{
//                 width: '100%',
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'space-between',
//                 mt: 'auto'
//             }}>
//                 <Box sx={{ display: 'flex', gap: 0.4, alignItems: 'center' }}>
//                     <Avatar src={item.ownerAvatar} sx={{ width: 24, height: 24 }}/>
//                     <Typography sx={{ fontSize: 14, color: grey[700] }}>
//                     Nguyễn Châu Quyền
//                     </Typography>
//                 </Box>
//                 <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
//                     <Typography sx={{ fontSize: 14, color: grey[700] }}>
//                         {item.commentCount}
//                     </Typography>
//                     <MarkChatReadOutlined sx={{ fontSize: 14, color: grey[600] }}/>
//                 </Box>
//             </Box>
//             <Box sx={{
//                 width: '100%',
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'space-between',
//                 mt: 1
//             }}>
//                 <Box sx={{ display: 'flex', gap: 0.4, alignItems: 'center' }}>
//                     <Typography sx={{ fontSize: 14, color: grey[700] }}>
//                         {item.tags.join(', ')}
//                     </Typography>
//                 </Box>
//                 <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
//                     <Typography sx={{ fontSize: 14, color: grey[700] }}>
//                         {item.createAt}
//                     </Typography>
//                 </Box>
//             </Box>
//         </Box>
//     );
// }

// export default SquareQuestionBox;