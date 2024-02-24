import {Timeline } from 'antd';

export default function Experience() {
    return (
        <Timeline className="mx-auto mt-10"
            mode='left'
            items={[
                {
                    label: '2015-09-01',
                    children: 'Captain Promotion LTD',
                },
                {
                    children: 'Graphic Designer',
                },
                {
                    label: '2015-09-01',
                    children: 'University of South Wales Student Union',
                },
                {
                    children: 'Vice-President of Activities',
                },
            ]}
        />
    );
};
