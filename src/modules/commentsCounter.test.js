import commentsCounter from './commentsCounter.js';

describe('Passed in comments', () => {
  test('Pass in five comments', () => {
    const commentsArr = [
      {
        item_id: '1',
        username: 'Jane',
        comment: 'Hello',
      },
      {
        item_id: '2',
        username: 'John',
        comment: 'Cool',
      },
      {
        item_id: '3',
        username: 'Karlos',
        comment: 'Good',
      },
      {
        item_id: '4',
        username: 'Maya',
        comment: 'Looks awesome',
      },
      {
        item_id: '5',
        username: 'Kalu',
        comment: 'Heart touching',
      },
    ];

    expect(commentsCounter(commentsArr)).toBe(5);
  });

  test('Pass in one comment', () => {
    const commentsArr = [
      {
        item_id: '1',
        username: 'Jane',
        comment: 'Hello',
      },
    ];

    expect(commentsCounter(commentsArr)).toBe(1);
  });

  test('Pass in zero comment', () => {
    const commentsArr = [];

    expect(commentsCounter(commentsArr)).toBe(0);
  });
});