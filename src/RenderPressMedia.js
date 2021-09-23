import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Card, Col, Row } from 'react-bootstrap';

function RenderPressMedia(props) {
  const { t } = useTranslation();
  const [pressPlanned, setPressPlanned] = useState([]);
  useEffect(() => {
    if (!props.pressPlannedData) return;
    setPressPlanned(props.pressPlannedData);
  }, [props.pressPlannedData]);

  const renderMedia = (media) => {
    switch (media) {
    case 'PHONE':
      return t('press.media.phone');
    case 'LETTER':
      return t('press.media.letter');
    case 'EMAIL':
      return t('press.media.email');
    case 'SMS':
      return t('press.media.sms');
    }
  };

  const renderPress = (media) => {
    return (
      <>
        {t(`press.text`, {
          media: renderMedia(media),
        })}
      </>
    );
  };

  return (
    <Row>
      {pressPlanned.length > 0 &&
       pressPlanned.map((press, index) => (
         <Col lg={12} className="col-main" key={index}>
           <Card>
             <Card.Body>
               <ul className="d-flex flex-row m-0 list-unstyled align-items-center">
                 <li aria-label="Reminder to do or reminder for today">
                   {renderPress(press.media)}
                 </li>
               </ul>
             </Card.Body>
           </Card>
         </Col>
       ))}
    </Row>
  );
}

export default RenderPressMedia;
