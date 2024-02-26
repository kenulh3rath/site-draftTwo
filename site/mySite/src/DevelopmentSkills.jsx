import React from 'react';
import {ConfigProvider, Flex, Progress} from 'antd';

export default function DevelopmentSkills(){
    return(
        <>
            <ConfigProvider
                theme={{
                    components: {
                        Progress: {
                            colorText: '#fff',
                        },
                    },
                }}
            >
                <Flex gap="small" vertical>
                    <Progress percent={87}  strokeColor="#84828f" format={() => 'Frontend'}/>
                    <Progress percent={92} strokeColor="#84828f" format={() => 'Backend'} />
                    <Progress percent={80} strokeColor="#84828f" format={() => 'Mobile Development'} />
                    <Progress percent={90} strokeColor="#84828f" format={() => 'Web Development'} />
                    <Progress percent={95} strokeColor="#84828f" format={() => 'Desktop Development'} />
                </Flex>
            </ConfigProvider>
        </>
    );
}