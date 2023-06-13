import { useCallback, useEffect, useState } from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  FormGroup,
  FormControlLabel,
  Drawer
} from '@mui/material';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Switch from '@mui/material/Switch';
import { styles } from './styles';
import { data } from './data';
import { Scrollbars } from 'react-custom-scrollbars';
import { useDispatch, useSelector } from 'react-redux';
import { focusComponentState } from '~/store/selectors';
import { softDevices, focusOnComponent } from '~/store/actions';
export default function MenuSearchProducts() {
  let _data = data;
  const dispatch = useDispatch();
  const [arrTag, setArrTag] = useState([]);
  const isFocusComponent = useSelector(focusComponentState);
  const handleOnFocusDrawer = useCallback(
    focus => {
      dispatch(
        focusOnComponent.setFocusOnComponent({
          state: focus
        })
      );
    },
    [dispatch]
  );

  const handleSoftFollowTag = tag => {
    if (!arrTag.includes(tag)) {
      setArrTag(oldArrTag => {
        return [...oldArrTag, tag];
      });
    } else {
      setArrTag(oldArrTag => oldArrTag.filter(_tag => _tag !== tag));
    }
  };

  if (localStorage.getItem('_pathname') !== '/' && localStorage.getItem('_pathname') !== '/product/laptops') {
    _data = data.filter(
      item => !['CPU', 'RAM', 'Loaị ổ cứng', 'Loại card đồ họa', 'Kích thước màn hình'].includes(item.name)
    );
  }

  useEffect(() => {
    dispatch(softDevices.tagFilter(arrTag));
  }, [arrTag, dispatch]);

  return (
    <div style={styles.wrap_menu_search}>
      <Scrollbars
        style={styles.scrollbars}
        autoHide={!isFocusComponent}
        autoHideTimeout={100}
        autoHideDuration={100}
        onMouseOver={() => handleOnFocusDrawer(true)}
        onMouseLeave={() => handleOnFocusDrawer(false)}
      >
        <Drawer sx={styles.drawer} variant="permanent">
          <div style={{ display: 'flex' }}>
            <ManageSearchIcon sx={styles.icon_search} />
            <Typography sx={styles.text01}>Bộ lọc</Typography>
          </div>
          <div style={styles.wrap_formgroup}>
            <FormGroup sx={styles.formgroup}>
              <FormControlLabel
                labelPlacement="start"
                control={<Switch />}
                label="Chỉ hiển thị khuyến mãi/ưu đãi"
                onClick={() => handleSoftFollowTag('ONLY_PROMOTE')}
                sx={styles.form_control_label}
              />
            </FormGroup>
            {_data.map((search_type, index) => {
              return (
                <div
                  key={search_type.name}
                  style={{
                    borderBottom: data.length - 1 === index ? '0px' : '1px solid',
                    borderColor: 'rgba(236, 240, 244, 1)'
                  }}
                >
                  <Accordion defaultExpanded={index === 0 ? true : false} disableGutters sx={styles.accordion}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                      sx={styles.accordion_summary}
                    >
                      <Typography sx={styles.text02}>{search_type.name}</Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={styles.accordion_details}>
                      {search_type.tag.map(tag => {
                        return (
                          <div
                            key={tag}
                            name={tag}
                            onClick={() => {
                              handleSoftFollowTag(tag);
                            }}
                            style={Object.assign(
                              {
                                border: arrTag.includes(tag)
                                  ? '1px solid rgba(0, 101, 238, 1)'
                                  : '1px solid rgba(236, 240, 244, 1)'
                              },
                              styles.tag
                            )}
                          >
                            <Typography
                              sx={{ padding: '8px 12px', fontWeight: arrTag.includes(tag) ? 'bold' : 'initial' }}
                            >
                              {tag}
                            </Typography>
                          </div>
                        );
                      })}
                    </AccordionDetails>
                  </Accordion>
                </div>
              );
            })}
          </div>
        </Drawer>
      </Scrollbars>
    </div>
  );
}
