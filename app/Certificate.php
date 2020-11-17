<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Certificate extends Model
{
    public $timestamps = false;
    protected $fillable = ['subjectDN', 'issuerDN', 'validFrom', 'validTo', 'document_id', 'user_id'];

    /**
     * returns the user that the certificate belongs to
     *
     * @return BelongsTo
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
