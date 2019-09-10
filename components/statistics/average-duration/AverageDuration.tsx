import React, { FC } from 'react';
import css from './AverageDuration.scss';

export interface Props {
    average_duration: number;
}

export const AverageDuration: FC<Props> = props => {
    const { average_duration } = props;

    function getReadableTime(seconds: number): string {
        return `${Math.floor(seconds / 60)}m ${Math.floor(seconds % 60)}s`
    }

    return (
        <div className={css.average_duration}>
            <span>Average duration: </span>
            <span>{getReadableTime(average_duration)}</span>
        </div>
    );
};

export default AverageDuration;
