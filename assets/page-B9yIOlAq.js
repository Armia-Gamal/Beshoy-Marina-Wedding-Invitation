import {r as e} from "./rolldown-runtime-S-ySWqyJ.js";
import {i as t, r as n} from "./framework-DjPHiq1u.js";
var r = e(t(), 1)
  , i = n()
    , a = new Date(`2026-10-01T17:00:00+03:00`).getTime();
function o() {
    let[e,t] = (0,
    r.useState)({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });
    return (0,
    r.useEffect)( () => {
        let e = () => {
            let e = Math.max(0, a - Date.now());
            t({
                days: Math.floor(e / 864e5),
                hours: Math.floor(e / 36e5) % 24,
                minutes: Math.floor(e / 6e4) % 60,
                seconds: Math.floor(e / 1e3) % 60
            })
        }
        ;
        e();
        let n = setInterval(e, 1e3);
        return () => clearInterval(n)
    }
    , []),
    e
}
function s() {
    let[e,t] = (0,
    r.useState)(!1)
      , [n,a] = (0,
    r.useState)(!1)
      , s = (0,
    r.useRef)(null)
    , h = (0,
    r.useRef)(!1)
      , c = o()
      , l = () => {
        if (s.current)
            return;
        let e = new Audio(`/audio/edkhly-amry-wedding-cut.mp3`);
        e.loop = !0,
        e.volume = .86,
        s.current = e,
        e.play().catch( () => {})
    }
      , u = () => {
                h.current = !0,
            document.body.style.overflow = ``,
                l(),
                t(!0)
        }
            , p = () => {
                u(),
                setTimeout( () => document.getElementById(`invitation`)?.scrollIntoView({
            behavior: `smooth`
        }), 1650)
    }
    ;
    (0,
    r.useEffect)( () => {
                document.body.style.overflow = `hidden`;
                let e = () => {
                    if (!h.current)
                        window.scrollTo(0, 0)
                }
                  , r = e => {
                        if (h.current)
                                return;
                        l(),
                        e.preventDefault()
                }
                ;
                return window.addEventListener(`scroll`, e, {
                    passive: !0
                }),
                window.addEventListener(`wheel`, r, {
                    passive: !1
                }),
                window.addEventListener(`touchmove`, r, {
                    passive: !1
                }),
        () => {
            window.removeEventListener(`scroll`, e),
                    window.removeEventListener(`wheel`, r),
                    window.removeEventListener(`touchmove`, r),
            document.body.style.overflow = ``
        }
    }
    , []);
    return (0,
    i.jsxs)(`main`, {
        className: e ? `site opened` : `site`,
        children: [(0,
        i.jsx)(`div`, {
            className: `noise`
        }), (0,
        i.jsxs)(`div`, {
            className: `petals`,
            children: [(0,
            i.jsx)(`i`, {}), (0,
            i.jsx)(`i`, {}), (0,
            i.jsx)(`i`, {}), (0,
            i.jsx)(`i`, {}), (0,
            i.jsx)(`i`, {}), (0,
            i.jsx)(`i`, {})]
        }), (0,
        i.jsx)(`section`, {
            className: `cover`,
            children: (0,
            i.jsxs)(`button`, {
                className: `envelope-button`,
                onClick: p
                ,
                "aria-label": `Open invitation`,
                children: [(0,
                i.jsx)(`span`, {
                    className: `envelope-back`
                }), (0,
                i.jsx)(`span`, {
                    className: `envelope-card`,
                    children: (0,
                    i.jsx)(`b`, {
                        children: `B & M`
                    })
                }), (0,
                i.jsx)(`span`, {
                    className: `envelope-front`
                }), (0,
                i.jsx)(`span`, {
                    className: `envelope-flap`
                }), (0,
                i.jsx)(`span`, {
                    className: `envelope-seal`,
                    children: `B&M`
                })]
            })
        }), (0,
        i.jsxs)(`section`, {
            id: `invitation`,
            className: `invite arch-section`,
            children: [(0,
            i.jsxs)(`div`, {
                className: `stage-doves`,
                "aria-hidden": `true`,
                children: [(0,
                i.jsx)(`span`, {
                    children: `🕊`
                }), (0,
                i.jsx)(`span`, {
                    children: `🕊`
                })]
            }), (0,
            i.jsxs)(`div`, {
                className: `curtain-stage`,
                children: [(0,
                i.jsx)(`div`, {
                    className: `curtain curtain-left`
                }), (0,
                i.jsx)(`div`, {
                    className: `curtain curtain-right`
                }), (0,
                i.jsx)(`div`, {
                    className: `curtain-top`
                }), (0,
                i.jsxs)(`div`, {
                    className: `arch-frame`,
                    children: [(0,
                    i.jsx)(`img`, {
                        className: `hero-photo`,
                        src: `/images/real-crop.jpg`,
                        alt: `Beshoy and Marina`
                    }), (0,
                    i.jsxs)(`div`, {
                        className: `hero-copy`,
                        children: [(0,
                        i.jsx)(`div`, {
                            className: `tiny-stars`,
                            children: `✦　·　✦`
                        }), (0,
                        i.jsx)(`p`, {
                            className: `script`,
                            children: `Together with their families`
                        }), (0,
                        i.jsxs)(`h2`, {
                            children: [`Beshoy`, (0,
                            i.jsx)(`br`, {}), (0,
                            i.jsx)(`span`, {
                                children: `&`
                            }), (0,
                            i.jsx)(`br`, {}), `Marina`]
                        }), (0,
                        i.jsx)(`div`, {
                            className: `divider`,
                            children: `❦`
                        }), (0,
                        i.jsx)(`p`, {
                            children: `JOYFULLY INVITE YOU TO CELEBRATE THEIR WEDDING`
                        }), (0,
                        i.jsx)(`strong`, {
                            children: `THURSDAY · 1 OCTOBER 2026`
                        }), (0,
                        i.jsx)(`small`, {
                            children: `FIVE O'CLOCK IN THE EVENING`
                        })]
                    })]
                })]
            })]
        }), (0,
        i.jsxs)(`section`, {
            className: `count`,
            children: [(0,
            i.jsx)(`p`, {
                className: `micro`,
                children: `THE WAIT IS ALMOST OVER`
            }), (0,
            i.jsx)(`h2`, {
                children: `Counting down to forever`
            }), (0,
            i.jsx)(`div`, {
                className: `clock`,
                children: [[c.days, `DAYS`], [c.hours, `HOURS`], [c.minutes, `MIN`], [c.seconds, `SEC`]].map( ([e,t]) => (0,
                i.jsxs)(`div`, {
                    children: [(0,
                    i.jsx)(`b`, {
                        children: String(e).padStart(2, `0`)
                    }), (0,
                    i.jsx)(`span`, {
                        children: t
                    })]
                }, t))
            })]
        }), (0,
        i.jsxs)(`section`, {
            className: `schedule`,
            children: [(0,
            i.jsxs)(`div`, {
                className: `section-head`,
                children: [(0,
                i.jsx)(`span`, {
                    children: `✦`
                }), (0,
                i.jsx)(`p`, {
                    className: `script`,
                    children: `The Wedding Day`
                }), (0,
                i.jsx)(`h2`, {
                    children: `Order of Events`
                })]
            }), (0,
            i.jsxs)(`div`, {
                className: `timeline`,
                children: [(0,
                i.jsxs)(`article`, {
                    children: [(0,
                    i.jsx)(`time`, {
                        children: `5:00 PM`
                    }), (0,
                    i.jsx)(`i`, {
                        children: `♱`
                    }), (0,
                    i.jsxs)(`div`, {
                        children: [(0,
                        i.jsx)(`h3`, {
                            children: `Wedding Ceremony`
                        }), (0,
                        i.jsx)(`p`, {
                            children: `St. Archangel Michael Church · Sherton`
                        }), (0,
                        i.jsx)(`a`, {
                            className: `event-map`,
                            href: `https://maps.app.goo.gl/g6LMytzo3gGmS4cU8`,
                            target: `_blank`,
                            rel: `noreferrer`,
                            children: `OPEN CHURCH LOCATION ↗`
                        })]
                    })]
                }), (0,
                i.jsxs)(`article`, {
                    children: [(0,
                    i.jsx)(`time`, {
                        children: `5:00 PM`
                    }), (0,
                    i.jsx)(`i`, {
                        children: `✦`
                    }), (0,
                    i.jsxs)(`div`, {
                        children: [(0,
                        i.jsx)(`h3`, {
                            children: `Wedding Celebration`
                        }), (0,
                        i.jsx)(`p`, {
                            children: `none`
                        }), (0,
                        i.jsx)(`a`, {
                            className: `event-map`,
                            href: ``,
                            target: `_blank`,
                            rel: `noreferrer`,
                            children: `OPEN VENUE LOCATION ↗`
                        })]
                    })]
                })]
            }), (0,
            i.jsxs)(`figure`, {
                className: `couple-banner`,
                children: [(0,
                i.jsx)(`img`, {
                    src: `/images/real-crop.jpg`,
                    alt: `Beshoy and Marina`
                }), (0,
                i.jsx)(`figcaption`, {
                    children: `One beautiful day · One unforgettable beginning`
                })]
            })]
        }), (0,
        i.jsx)(`section`, {
            className: `church arch-section`,
            children: (0,
            i.jsxs)(`div`, {
                className: `venue-card church-card`,
                children: [(0,
                i.jsx)(`p`, {
                    className: `script`,
                    children: `The Ceremony`
                }), (0,
                i.jsxs)(`h2`, {
                    children: [`St. Archangel Michael`, (0,
                    i.jsx)(`br`, {}), `Church`]
                }), (0,
                i.jsx)(`span`, {
                    children: `SHERTON · 5:00 PM`
                }), (0,
                i.jsxs)(`div`, {
                    className: `church-mark`,
                    children: [(0,
                    i.jsx)(`b`, {
                        children: `♱`
                    }), (0,
                    i.jsx)(`i`, {}), (0,
                    i.jsx)(`i`, {}), (0,
                    i.jsx)(`i`, {})]
                }), (0,
                i.jsxs)(`p`, {
                    children: [`We begin our forever with a blessing`, (0,
                    i.jsx)(`br`, {}), `and would be honored by your presence.`]
                }), (0,
                i.jsxs)(`a`, {
                    href: `https://maps.app.goo.gl/g6LMytzo3gGmS4cU8`,
                    target: `_blank`,
                    rel: `noreferrer`,
                    children: [`VIEW CHURCH LOCATION `, (0,
                    i.jsx)(`b`, {
                        children: `↗`
                    })]
                })]
            })
        }), (0,
        i.jsx)(`section`, {
            className: `venue arch-section`,
            children: (0,
            i.jsxs)(`div`, {
                className: `venue-card`,
                children: [(0,
                i.jsx)(`p`, {
                    className: `script`,
                    children: `The Celebration`
                }), (0,
                i.jsx)(`h2`, {
                    children: `none`
                }), (0,
                i.jsx)(`span`, {
                    children: `none`
                }), (0,
                i.jsxs)(`div`, {
                    className: `building`,
                    children: [(0,
                    i.jsx)(`i`, {}), (0,
                    i.jsx)(`i`, {}), (0,
                    i.jsx)(`i`, {}), (0,
                    i.jsx)(`i`, {}), (0,
                    i.jsx)(`i`, {})]
                }), (0,
                i.jsxs)(`p`, {
                    children: [`Join us for dinner, dancing`, (0,
                    i.jsx)(`br`, {}), `and an unforgettable evening.`]
                }), (0,
                i.jsxs)(`a`, {
                    href: `#`,
                    target: `_blank`,
                    rel: `noreferrer`,
                    children: [`VENUE LOCATION TO FOLLOW `, (0,
                    i.jsx)(`b`, {
                        children: `↗`
                    })]
                })]
            })
        }), (0,
        i.jsxs)(`section`, {
            className: `rsvp`,
            children: [(0,
            i.jsx)(`p`, {
                className: `micro`,
                children: `KINDLY RESPOND BY OCTOBER 1`
            }), (0,
            i.jsx)(`h2`, {
                children: `Will you join us?`
            }), (0,
            i.jsx)(`p`, {
                children: `Your presence would make our celebration complete.`
            }), (0,
            i.jsx)(`a`, {
                href: `https://wa.me/?text=I%20would%20love%20to%20attend%20Beshoy%20and%20Marina's%20wedding`,
                target: `_blank`,
                rel: `noreferrer`,
                children: `CONFIRM ATTENDANCE`
            })]
        }), (0,
        i.jsxs)(`footer`, {
            children: [(0,
            i.jsxs)(`div`, {
                className: `crest small`,
                children: [(0,
                i.jsx)(`span`, {
                    children: `B`
                }), (0,
                i.jsx)(`b`, {
                    children: `&`
                }), (0,
                i.jsx)(`span`, {
                    children: `M`
                })]
            }), (0,
            i.jsx)(`p`, {
                children: `With love, always`
            }), (0,
            i.jsx)(`small`, {
                children: `BESHOY & MARINA · 2026`
            })]
        }), e && (0,
        i.jsxs)(`button`, {
            className: `sound`,
            onClick: () => {
                if (!s.current)
                    return;
                let e = !n;
                s.current.muted = e,
                a(e)
            }
            ,
            "aria-label": `Toggle music`,
            children: [n ? `♪` : `♫`, (0,
            i.jsx)(`span`, {
                children: n ? `PLAY` : `MUSIC`
            })]
        })]
    })
}
export {s as default};
