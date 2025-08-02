import { useEffect, useRef } from "react";
import styles from './ScheduleClock.module.css';

const ScheduleClock = () => {
    const circle1Ref = useRef<HTMLDivElement>(null);
    const circle3Ref = useRef<HTMLDivElement>(null);
    const hourRef = useRef<HTMLDivElement>(null);
    const minuteRef = useRef<HTMLDivElement>(null);
    const secondRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!circle1Ref.current || !circle3Ref.current || !containerRef.current) return;
        
        const date = new Date();

        function drawTicks() {
            for (let i = 0; i < 90; i++) {
                const line = document.createElement('div');
                line.className = `${styles.line} ${i % 6 === 0 ? styles.thick : styles.thin}`;
                line.style.transform = `rotate(${2.5 * i}deg)`;
                circle1Ref.current?.appendChild(line);
            }
        }

        function drawNumbers() {
            let right = 6;
            let left = 18;

            for (let i = 0; i < 12; i++) {
                const numContainer = document.createElement('div');
                numContainer.className = styles.numContainer;
                numContainer.style.transform = `rotate(${15 * i}deg)`;
                
                numContainer.innerHTML = `
                    <div class="${styles.num} ${i === 0 || i === 6 ? styles.highlight : ''}" 
                         style="transform: rotate(-${15 * i}deg)">
                        ${left > 24 ? left - 24 : left}
                    </div>
                    <div class="${styles.num} ${i === 0 || i === 6 ? styles.highlight : ''}" 
                         style="transform: rotate(-${15 * i}deg)">
                        ${right}
                    </div>
                `;
                circle3Ref.current?.appendChild(numContainer);
                right++;
                left++;
            }
        }

        function calculateAngles() {
            return {
                secDeg: (360 * (date.getSeconds() / 60)) + (6 * (date.getMilliseconds() / 1000)),
                minDeg: (360 * (date.getMinutes() / 60)) + (6 * (date.getSeconds() / 60)),
                hourDeg: (360 * (date.getHours() / 24)) + (15 * (date.getMinutes() / 60))
            };
        }

        function rotateAnimation(hand: HTMLElement | null, duration: number, deg: number) {
            if (hand) {
                hand.animate([
                    { transform: `rotate(${deg}deg)` },
                    { transform: `rotate(${deg + 360}deg)` }
                ], {
                    duration,
                    iterations: Infinity
                });
            }
        }

        function drawSchedule(labels: { text: string, left: string, top: string }[]) {
            labels.forEach(label => {
                const scheduleLabel = document.createElement("div");
                scheduleLabel.className = styles.scheduleLabel;
                scheduleLabel.style.left = label.left;
                scheduleLabel.style.top = label.top;
                scheduleLabel.innerText = label.text;
                containerRef.current?.appendChild(scheduleLabel);
            });
        }

        drawTicks();
        drawNumbers();
        const { secDeg, minDeg, hourDeg } = calculateAngles();
        rotateAnimation(hourRef.current, 43200000, hourDeg);
        rotateAnimation(minuteRef.current, 3600000, minDeg);
        rotateAnimation(secondRef.current, 60000, secDeg);

        drawSchedule([
            { text: "취침", left: "75%", top: "20%" },
            { text: "출근", left: "90%", top: "58%" },
            { text: "재취침", left: "80%", top: "78%" },
            { text: "회사업무", left: "30%", top: "80%" },
            { text: "자기계발", left: "10%", top: "28%" },
            { text: "퇴근", left: "18%", top: "10%" },
            { text: "휴식/자기계발", left: "40%", top: "10%" },
        ]);
    }, []);

    return (
        <div className={styles.clockContainer}>
                <div ref={circle1Ref} className={styles.circle1}></div>
                <div className={styles.circle2}></div>
                <div ref={circle3Ref} className={styles.circle3}>
                    <div className={`${styles.clockLogo} ${styles.font1}`}>
                        <span>small-goliath</span>
                    </div>
                    <div className={styles.scheduleArea}>
                        <div ref={containerRef} className={styles.scheduleContainer}></div>
                    </div>
                </div>
                <div ref={hourRef} className={styles.hourHand}><div className={styles.whiteSpace}></div></div>
                <div ref={minuteRef} className={styles.minuteHand}><div className={styles.whiteSpace}></div></div>
                <div ref={secondRef} className={styles.secondHand}></div>
                <div className={styles.center}></div>
        </div>
    );
};

export default ScheduleClock;