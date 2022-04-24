import { Button, Space } from '@mantine/core';
import React from 'react';
import { SiAuth0 } from 'react-icons/si';

const AuthFeature = () => {
	return (
		<div>
			<Space h={'lg'} />
			<Button
				onClick={() => null}
				size="md"
				leftIcon={<SiAuth0 />}
				variant="outline"
			>
				Login
			</Button>
		</div>
	);
};

export default React.memo(AuthFeature);
