import React from 'react';
import { Flex, Progress } from 'antd';

export default function DevelopmentSkills(){
    return(
        <Flex gap="small" vertical>

            <Progress percent={87} strokeColor="#fff" format={() => 'Frontend'} />
            <Progress percent={92} strokeColor="#fff" format={() => 'Backend'} />
            <Progress percent={80} strokeColor="#fff" format={() => 'Mobile Development'} />
            <Progress percent={90} strokeColor="#fff" format={() => 'Web Development'} />
            <Progress percent={95} strokeColor="#fff" format={() => 'Desktop Development'} />
        </Flex>
    );
}