import './modal.css';

const Modal = ({ handleClose, show, children, handleUpload }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";

    return (
        <div className={showHideClassName}>
            <section className="modal-main">
                    <section className='modal-header'>
                        <h1>Token Upload</h1>
                        <button type="button" className='large-button large-button-topright' onClick={handleClose}>

                            &times;
                        </button>
                    </section>

                    <section className='modal-body'>
                        <label>
                            Token File (Accepted Formats: .PNG, .JPG):
                        </label>
                        <br/>
                        <input type="file" id="token-file" name="token-file" />
                        <button id="token-upload" onClick={handleUpload}>Upload</button>
                        <br/>
                        <label>
                            Max Size: 2MB
                        </label>

                    </section>
            </section>
        </div>
    );
};

export default Modal;