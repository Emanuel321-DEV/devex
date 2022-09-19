import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

interface BasicModalProps {
    img_src: string;
    alt: string;
}

export function BasicModal({ img_src, alt }: BasicModalProps) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="absolute top-0 bottom-0 right-0 left-0 m-auto w-[600px] h-[600px] rounded-[16px] mobile:w-[350px] mobile:h-[350px] tablet:w-[350px] tablet:h-[350px]">
            <img className='w-full h-full rounded-[12px]' src={img_src} alt={alt}/>
        </Box>
      </Modal>
      <button className='bg-card-button-color text-center rounded-[12px] text-white w-[280px] m-auto p-3' onClick={handleOpen}>Ver</button>
    </div>
  );
}
