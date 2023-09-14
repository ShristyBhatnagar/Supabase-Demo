import { Button } from '@mui/material';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import React, { useState } from 'react';

const MFA = () => {
  const [data, setData] = useState(null); // Initialize data as null
  const supabase = useSupabaseClient();

  const getQR = async () => {
    try {
      const { data: mfaData, error } = await supabase.auth.mfa.enroll({
        factorType: 'totp'
        
      }
      );

      if (error) {
        console.error('Error enrolling MFA:', error);
        return;
      }

      setData(mfaData);
    } catch (error) {
      console.error('Error getting MFA QR code:', error);
    }
  };
  
  return (
    <div>
      <Button onClick={getQR} >MFA</Button>
      {data && data.totp && (
        <img src={data.totp.qr_code} alt={data.totp.uri} />
      )}
    </div>
  );
};

export default MFA;
