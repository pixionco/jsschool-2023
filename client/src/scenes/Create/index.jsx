import { memo, useState } from "react";

import Button from "../../components/Button";
import Input from "../../components/Input";
import styles from './Create.module.css';

const Create = (props) => {
    const [currentRobot, setCurrentRobot] = useState(0);
    const [name, setName] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(currentRobot, name);
    }

    const robots = [
        '/robot-1.svg',
        '/robot-2.svg',
        '/robot-3.svg',
        '/robot-4.svg',
        '/robot-5.svg',
        '/robot-6.svg',
        '/robot-7.svg',
        '/robot-8.svg',
        '/robot-9.svg',
        '/robot-10.svg'
    ];

    return (
        <div className={styles.form}>
            <div className={styles.robotContainer}>
                <img className={styles.robot} src={robots[currentRobot]} alt="robot" />
            </div>
            <div className={styles.buttonContainer}>
                {
                    robots.map((url, index) => {
                        return <Button key={url} label={index + 1} onClick={() => setCurrentRobot(index)} />
                    })
                }
            </div>
            {/* <input ref={nameRef} /> */}
            <Input onChange={(value) => {setName(value)}} />
            {/* <button type="submit" onClick={onSubmit}> submit</button> */}
            <Button label="Submit" onClick={onSubmit} />
        </div>
    );
}

export default memo(Create);