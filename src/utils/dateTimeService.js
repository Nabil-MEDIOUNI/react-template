const months = [
  '-',
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

export const getFullDate = (date) => {
  const d = new Date(date);
  return `${d.getDate()}-${d.getMonth() + 1}-${d.getFullYear()}`;
};

export const formatDateLong = (date) => {
  const d = new Date(date);
  return `${months[d.getMonth() + 1]} ${d.getDate()}, ${d.getFullYear()}`;
};

export const getSignUPDate = (ep) => {
  if (String(ep.id).length === 14) {
    if (parseInt(ep.id.charAt(2), 10) === 0) {
      return `${ep.id.charAt(0)}${ep.id.charAt(1)} ${months[ep.id.charAt(3)]}`;
    }
  }
  if (String(ep.id).length === 13) {
    if (parseInt(ep.id.charAt(1), 10) === 0) {
      return `${ep.id.charAt(0)} ${months[ep.id.charAt(2)]}`;
    }
  }
};

export const PostedAt = (date) => {
  const now = new Date();
  const posted_at = new Date(parseInt(date, 10));

  const getHour = now.getHours() - posted_at.getHours();
  const getMinutes = now.getMinutes() - posted_at.getMinutes();
  const getSeconds = now.getSeconds() - posted_at.getSeconds();

  const getDay = now.getDate() - posted_at.getDate();

  if (Math.abs(getSeconds) < 60 && Math.abs(getMinutes) === 0 && getDay === 0) return 'Just now';
  if (Math.abs(getMinutes) < 60 && Math.abs(getHour) < 1 && getDay === 0) return `${Math.abs(getMinutes)} min ago`;
  if (Math.abs(getHour) === 0 && getDay > 0) return `${Math.abs(getDay)}d`;

  if (getDay === 1) {
    return `Yesterday at ${posted_at.getHours()}:${posted_at.getMinutes()}`;
  }

  if (getDay > 0) {
    return `${
      months[posted_at.getMonth() + 1]
    } ${posted_at.getDate()} at ${posted_at.getHours()}:${posted_at.getMinutes()}`;
  }

  return `${Math.abs(getHour)}h`;
};

export const CommenteddAt = (date) => {
  const now = new Date();
  const posted_at = new Date(parseInt(date, 10));

  const getHour = now.getHours() - posted_at.getHours();
  const getMinutes = now.getMinutes() - posted_at.getMinutes();
  const getSeconds = now.getSeconds() - posted_at.getSeconds();

  const getDay = now.getDate() - posted_at.getDate();

  if (Math.abs(getSeconds) < 60 && Math.abs(getMinutes) === 0 && getDay === 0) return 'just now';
  if (Math.abs(getMinutes) < 60 && Math.abs(getHour) < 1 && getDay === 0) return `${Math.abs(getMinutes)}m`;
  if (Math.abs(getDay) > 0) return `${Math.abs(getDay)}d`;

  return `${Math.abs(getHour)}h`;
};
