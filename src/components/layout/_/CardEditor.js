import * as React from 'karet';
import * as U from 'karet.util';
import * as R from 'kefir.ramda';
import BaseInput from '../../forms/BaseInput';

const CardEditor = ({ card }) => {
  const { id, size, position, content } = U.destructure(card);

  const width = U.view(0, size);
  const height = U.view(1, size);
  const left = U.view(0, position);
  const top = U.view(1, position);

  const isDisabled = U.mapValue(R.not, card);

  return (
    <div className="c--form c--form--2col">
      <div className="c--form-group c--form--2span">
        <label className="c--label">
          ID
        </label>
        <div className="c--label-value">
          {id}
        </div>
      </div>

      <div className="c--form-group">
        <label className="c--label">
          Width
        </label>
        <BaseInput disabled={isDisabled} type="number" value={width} />
      </div>

      <div className="c--form-group">
        <label className="c--label">
          Height
        </label>
        <BaseInput disabled={isDisabled} type="number" value={height} />
      </div>

      <div className="c--form-group">
        <label className="c--label">
          Left
        </label>
        <BaseInput disabled={isDisabled} type="number" value={left} />
      </div>

      <div className="c--form-group">
        <label className="c--label">
          Top
        </label>
        <BaseInput disabled={isDisabled} type="number" value={top} />
      </div>

      <div className="c--form-group c--form--2span">
        <label className="c--label">
          Content
        </label>
        <textarea
          className="c--input--textarea"
          value={content}
          onChange={e => content.set(e.target.value)}
          disabled={isDisabled}
          rows={5}
        />
      </div>
    </div>
  );
};

export default CardEditor;
