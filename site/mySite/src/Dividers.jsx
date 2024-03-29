import {ConfigProvider, Divider} from 'antd';

export default function Dividers() {
    return (
        <div className="flex justify-center">
            <div className="max-w-7xl w-full">
                <ConfigProvider
                    theme={{
                        token: {
                            lineWidth: '4px',
                            colorSplit: '#fff',
                        },
                    }}
                >
                    <Divider/>
                </ConfigProvider>

            </div>
        </div>

    )
}