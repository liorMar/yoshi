import React from 'react';
import { translate } from 'react-i18next';
import s from './App.scss';
import logo from './yoshi.png';
import PropTypes from 'prop-types';

class App extends React.Component {
  static propTypes = {
    t: PropTypes.func,
  };

  render() {
    const { t } = this.props;
    return (
      <div className={s.root}>
        <h2 className={s.title} data-testid="app-title">
          {t('app.title')}
        </h2>
        <ComponentYouProbablyWantToRemove />
      </div>
    );
  }
}

export default translate()(App);

// Feel free to remove everything below 👇

const ComponentYouProbablyWantToRemove = () => {
  return (
    <div className={s.intro}>
      <LogoYouProbablyWantToRemove />

      <p className={s.description}>
        Please check out{' '}
        <LinkYouProbablyWantToRemove
          label="yoshi docs"
          link="https://wix.github.io/yoshi/docs/api/configuration"
        />
        {' and '}
        <LinkYouProbablyWantToRemove
          label="fed-handbook"
          link="https://github.com/wix-private/fed-handbook#welcome-to-the-fed-handbook"
        />{' '}
        if you have any questions. <br />
        In case of some bugs or specific issues, feel free to{' '}
        <LinkYouProbablyWantToRemove
          label="create an issue on github"
          link="https://github.com/wix/yoshi/issues"
        />
        {'. '}
        <br />
        <LinkYouProbablyWantToRemove
          label="Join #yoshi"
          link="https://slack.com/app_redirect?channel=yoshi"
        />{' '}
        slack channel to be aware of new releases and other news.
      </p>
      <div className={s.footer}>
        <span>By yoshi team with </span>
        <span role="img" aria-label="heart">
          ❤️
        </span>
      </div>
    </div>
  );
};

const LinkYouProbablyWantToRemove = ({ label, link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      {label}
    </a>
  );
};

const LogoYouProbablyWantToRemove = () => (
  <div className={s.eggWrapper}>
    <img className={s.logo} src={logo} alt="logo" />
    <div className={s.partLeft} />
    <div className={s.partRight} />
  </div>
);
